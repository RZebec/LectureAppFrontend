export class MensaPlan {
    endDate: number;
    dailyPlan: DailyPlan[];
    startDate: number;
}

export class DailyPlan {
    weekday: number;
    meals: string[];
}

