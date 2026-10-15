import { AlertCircle, Inbox } from 'lucide-react';
import { useEffect } from 'react';
import { Navigate } from 'react-router';

import { useAreaQuery } from '@/entities/area';
import { useDirectionQuery } from '@/entities/direction';
import { useQuestionsQuery } from '@/entities/question';
import { useTopicQuery } from '@/entities/topic';
import {
  QuestionCard,
  TrainerCompleted,
  TrainerNavigator,
  TrainerProgress,
  TrainerSidebar,
  TrainerToolbar,
  useTrainerStore,
} from '@/features/question-trainer';
import { ROUTES } from '@/shared/config/routes';
import { useHotkeys } from '@/shared/hooks';
import { useTypedParams } from '@/shared/lib';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { EmptyState } from '@/shared/ui/empty-state';
import { Skeleton } from '@/shared/ui/skeleton';

export function TrainerPage() {
  const { areaSlug, directionSlug, topicSlug } = useTypedParams(
    'areaSlug',
    'directionSlug',
    'topicSlug',
  );

  const areaQuery = useAreaQuery(areaSlug);
  const directionQuery = useDirectionQuery(areaSlug, directionSlug);
  const topicQuery = useTopicQuery(areaSlug, directionSlug, topicSlug);
  const questionsQuery = useQuestionsQuery(areaSlug, directionSlug, topicSlug);

  // 404 если что-то из родителей не найдено
  if (
    (areaQuery.isSuccess && !areaQuery.data) ||
    (directionQuery.isSuccess && !directionQuery.data) ||
    (topicQuery.isSuccess && !topicQuery.data)
  ) {
    return <Navigate to="/not-found" replace />;
  }

  const area = areaQuery.data;
  const direction = directionQuery.data;
  const topic = topicQuery.data;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <Breadcrumbs
          items={[
            { label: 'Области', to: ROUTES.areas },
            { label: area?.name ?? '...', to: ROUTES.directions(areaSlug) },
            {
              label: direction?.name ?? '...',
              to: ROUTES.topics(areaSlug, directionSlug),
            },
            { label: topic?.name ?? '...' },
          ]}
        />
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">{topic?.name ?? 'Загрузка...'}</h1>
          {topic && <p className="text-muted-foreground">{topic.description}</p>}
        </header>
      </div>

      <TrainerContent
        questions={questionsQuery.data}
        isLoading={questionsQuery.isLoading}
        isError={questionsQuery.isError}
        error={questionsQuery.error}
      />
    </div>
  );
}

interface TrainerContentProps {
  questions: ReturnType<typeof useQuestionsQuery>['data'];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
}

function TrainerContent({ questions, isLoading, isError, error }: TrainerContentProps) {
  const initialize = useTrainerStore((state) => state.initialize);
  const currentIndex = useTrainerStore((state) => state.currentIndex);
  const isAnswerVisible = useTrainerStore((state) => state.isAnswerVisible);
  const isShuffled = useTrainerStore((state) => state.isShuffled);
  const isCompleted = useTrainerStore((state) => state.isCompleted);
  const toggleAnswer = useTrainerStore((state) => state.toggleAnswer);
  const goNext = useTrainerStore((state) => state.goNext);
  const goPrevious = useTrainerStore((state) => state.goPrevious);
  const goTo = useTrainerStore((state) => state.goTo);
  const questionOrder = useTrainerStore((state) => state.questionOrder);
  const shuffle = useTrainerStore((state) => state.shuffle);
  const restart = useTrainerStore((state) => state.restart);
  const finish = useTrainerStore((state) => state.finish);
  const canGoNext = useTrainerStore((state) => state.canGoNext());
  const canGoPrevious = useTrainerStore((state) => state.canGoPrevious());
  const isFinished = useTrainerStore((state) => state.isFinished());
  const realQuestionIndex = useTrainerStore((state) => state.getCurrentQuestionIndex());

  useEffect(() => {
    if (questions && questions.length > 0) {
      initialize(questions.length);
    }
  }, [questions, initialize]);

  // Клавиатурные шорткаты — определяем хуком на верхнем уровне,
  // но обработчики ничего не сделают, если questions ещё не загрузились
  useHotkeys([
    { key: ' ', handler: toggleAnswer },
    { key: 'ArrowRight', handler: goNext },
    { key: 'ArrowLeft', handler: goPrevious },
  ]);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-40 w-full" />
      </div>
    );
  }

  if (isError) {
    return (
      <EmptyState
        icon={AlertCircle}
        title="Не удалось загрузить вопросы"
        description={error?.message ?? 'Попробуйте обновить страницу'}
      />
    );
  }

  if (!questions || questions.length === 0) {
    return (
      <EmptyState
        icon={Inbox}
        title="Вопросов пока нет"
        description="В этой теме ещё не созданы вопросы"
      />
    );
  }

  const currentQuestion = questions[realQuestionIndex];

  // Защита от рассинхронизации: после перехода с длинной темы на короткую
  // может быть кадр, когда currentIndex ещё указывает на несуществующий
  // вопрос (стор сбрасывается в следующем тике useEffect).
  if (!currentQuestion || questionOrder.length !== questions.length) {
    return (
      <div className="flex flex-col gap-4">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-40 w-full" />
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
      {/* На мобильных список уходит под карточку, на десктопе — прилипает слева */}
      <TrainerSidebar
        questions={questions}
        questionOrder={questionOrder}
        currentIndex={currentIndex}
        onSelect={goTo}
        className="order-last max-h-80 lg:sticky lg:top-6 lg:order-first lg:max-h-[calc(100vh-3rem)]"
      />

      {/* Экран завершения — только по явному действию пользователя (кнопка "Завершить") */}
      {isCompleted ? (
        <TrainerCompleted
          totalQuestions={questions.length}
          onRestart={restart}
          onShuffle={shuffle}
        />
      ) : (
        <div className="flex min-w-0 flex-col gap-6">
          <TrainerToolbar isShuffled={isShuffled} onShuffle={shuffle} />
          <TrainerProgress current={currentIndex} total={questions.length} />

          <QuestionCard
            question={currentQuestion}
            isAnswerVisible={isAnswerVisible}
            onToggleAnswer={toggleAnswer}
          />

          <TrainerNavigator
            onPrevious={goPrevious}
            onNext={goNext}
            onFinish={finish}
            canGoPrevious={canGoPrevious}
            canGoNext={canGoNext}
            isLastQuestion={isFinished}
          />
        </div>
      )}
    </div>
  );
}
