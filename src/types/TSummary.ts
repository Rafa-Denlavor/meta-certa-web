export type TSummary = {
  completed: number;
  total: number;
  goalsPerDay: Record<
    string,
    {
      id: string;
      title: string;
      description?: string;
      completedAt: string;
    }[]
  >;
}[];
