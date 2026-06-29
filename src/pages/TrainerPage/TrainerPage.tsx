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
  const toggleAnswer = useTrainerStore((state) => state.toggleAnswer);
  const goNext = useTrainerStore((state) => state.goNext);
  const goPrevious = useTrainerStore((state) => state.goPrevious);
  const shuffle = useTrainerStore((state) => state.shuffle);
  const restart = useTrainerStore((state) => state.restart);
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

  // Экран завершения показываем, когда пользователь на последнем вопросе
  // И открыл ответ — это сигнал, что он действительно его проработал
  if (isFinished && isAnswerVisible) {
    return (
      <TrainerCompleted totalQuestions={questions.length} onRestart={restart} onShuffle={shuffle} />
    );
  }

  const currentQuestion = questions[realQuestionIndex];

  return (
    <div className="flex flex-col gap-6">
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
        canGoPrevious={canGoPrevious}
        canGoNext={canGoNext}
        isLastQuestion={isFinished}
      />
    </div>
  );
}
