import { AIMessageType } from "../components/ai-based-components/AiChatContainer";
import { CommuntityPostType } from "../types/CommunityPostType";
import {
  DailyActivity,
  GoalType,
  RoutineType,
  SuggestionType,
} from "../types/SuggestionType";
import { TravelRoutineType } from "../types/TravelRoutineType";

export const SAMPLE_PERSONALISED_SUGGESTIONS: SuggestionType[] = [
  {
    title: "Identify Tasks",
    description: "List essential tasks for the day",
  },
  {
    title: "Match with Energy Levels",
    description: "Align tasks with times when you feel most energized.",
  },
  {
    title: "Set Specific Goals",
    description: "Define clear goals and assign time slots for each.",
  },
  {
    title: "Build in Flexibility",
    description: "Leave some room for adjustments or unexpected tasks.",
  },
];

export const SAMPLE_MENTAL_HEALTH_SUGGESTIONS: SuggestionType[] = [
  {
    title: "Practice Gratitude",
    description:
      "Start a daily gratitude journal to shift focus toward positive aspects of life.",
  },
  {
    title: "Prioritize Sleep",
    description:
      "Aim for a regular sleep schedule to boost mood and cognitive function.",
  },
  {
    title: "Stay Physically Active",
    description:
      "Engage in physical exercise, as it releases endorphins and reduces stress.",
  },
  {
    title: "Mindful Breathing",
    description:
      "Incorporate deep breathing exercises to manage stress levels.",
  },
];

export const SAMPLE_SUSTAINABILITY_INSIGHTS: SuggestionType[] = [
  {
    title: "Self-Care",
    description:
      "Switch to reusable cotton pads. Replace single-use cotton pads with washable ones to reduce waste.",
  },
  {
    title: "Home Care",
    description:
      "Use wooden hangers. Wooden hangers last longer and are eco-friendly compared to plastic options.",
  },
  {
    title: "Kitchen Tips",
    description:
      "Opt for beeswax wraps instead of plastic. Beeswax wraps are reusable, helping cut down on plastic waste.",
  },
  {
    title: "Shopping",
    description:
      "Choose refillable products. Reduce plastic waste by opting for refillable containers for household items.",
  },
];

export const SAMPLE_GOALS: SuggestionType[] = [
  {
    title: "Improve Health",
    description:
      "Focus on regular exercise and balanced nutrition for a healthier lifestyle.",
  },
  {
    title: "Build Financial Security",
    description:
      "Set a budget and save consistently to achieve financial stability.",
  },
  {
    title: "Learn a New Skill",
    description:
      "Challenge yourself with a new language, instrument, or technical skill to expand your abilities.",
  },
  {
    title: "Strengthen Relationships",
    description:
      "Spend quality time with loved ones to build deeper connections.",
  },
  {
    title: "Advance Your Career",
    description:
      "Pursue training or networking opportunities to grow professionally.",
  },
  {
    title: "Practice Mindfulness",
    description:
      "Integrate meditation or journaling into your day for mental clarity.",
  },
  {
    title: "Organize Your Space",
    description:
      "Declutter and arrange your environment for a more efficient, peaceful life.",
  },
  {
    title: "Give Back",
    description:
      "Volunteer or support causes that align with your values to make a positive impact.",
  },
];

type SampleRoutineType = Omit<RoutineType, "id" | "time"> & {
  id: number;
};

export const SAMPLE_ROUTINES: SampleRoutineType[] = [
  {
    id: 1,
    title: "Morning Mindfulness",
    description:
      "Start the day with 10 minutes of meditation and deep breathing.",
    images: [
      { image: "/images/meditation1.webp", altDescription: "Meditation1" },
      { image: "/images/meditation2.webp", altDescription: "Meditation2" },
      { image: "/images/meditation3.webp", altDescription: "Meditation3" },
      { image: "/images/meditation4.webp", altDescription: "Meditation4" },
    ],
  },
  {
    id: 2,
    title: "Daily Exercise",
    description:
      "Dedicate 30 minutes to a workout or outdoor activity to stay fit.",
    images: [
      { image: "/images/exercise1.webp", altDescription: "Exercise1" },
      { image: "/images/exercise2.webp", altDescription: "Exercise2" },
      { image: "/images/exercise3.webp", altDescription: "Exercise3" },
      { image: "/images/exercise4.webp", altDescription: "Exercise4" },
    ],
  },
  {
    id: 3,
    title: "Learning Hour",
    description:
      "Spend one hour reading, studying, or watching educational content.",
    images: [
      { image: "/images/learning1.webp", altDescription: "Learning1" },
      { image: "/images/learning2.webp", altDescription: "Learning2" },
      { image: "/images/learning3.webp", altDescription: "Learning3" },
      { image: "/images/learning4.webp", altDescription: "Learning4" },
    ],
  },
  /*{
    id: 4,
    title: "Healthy Meal Prep",
    description:
      "Prepare balanced meals for the day with wholesome ingredients.",
    images: [
      { image: "/images/cooking1.webp", altDescription: "Cooking1" },
      { image: "/images/cooking2.webp", altDescription: "Cooking2" },
      { image: "/images/cooking3.webp", altDescription: "Cooking3" },
      { image: "/images/cooking4.webp", altDescription: "Cooking4" },
    ],
  },
  {
    id: 5,
    title: "Evening Journal",
    description:
      "Reflect on the day by writing down thoughts, goals, and gratitude.",
    images: [
      { image: "/images/journal1.webp", altDescription: "Writing Journal1" },
      { image: "/images/journal2.webp", altDescription: "Writing Journal2" },
      { image: "/images/journal3.webp", altDescription: "Writing Journal3" },
      { image: "/images/journal4.webp", altDescription: "Writing Journal4" },
    ],
  },
  {
    id: 6,
    title: "Creative Session",
    description:
      "Set aside 20 minutes to explore a hobby or work on a creative project.",
    images: [
      { image: "/images/hobby1.webp", altDescription: "Hobby1" },
      { image: "/images/hobby2.webp", altDescription: "Hobby2" },
      { image: "/images/hobby3.webp", altDescription: "Hobby3" },
      { image: "/images/hobby4.webp", altDescription: "Hobby4" },
    ],
  },
  {
    id: 7,
    title: "Tech-Free Time",
    description:
      "Take a break from screens for 30 minutes to unwind and recharge.",
    images: [
      { image: "/images/reading1.webp", altDescription: "Reading1" },
      { image: "/images/reading2.webp", altDescription: "Reading2" },
      { image: "/images/reading3.webp", altDescription: "Reading3" },
      { image: "/images/reading4.webp", altDescription: "Reading4" },
    ],
  },
  {
    id: 8,
    title: "Weekly Goal Setting",
    description:
      "Every Sunday, outline goals for the upcoming week to stay focused.",
    images: [
      {
        image: "/images/todo1.webp",
        altDescription: "Weekly Goals ToDo List1",
      },
      {
        image: "/images/todo2.webp",
        altDescription: "Weekly Goals ToDo List2",
      },
      {
        image: "/images/todo3.webp",
        altDescription: "Weekly Goals ToDo List3",
      },
      {
        image: "/images/todo4.webp",
        altDescription: "Weekly Goals ToDo List4",
      },
    ],
  },
  {
    id: 9,
    title: "Nightly Cleanup",
    description:
      "Spend 10 minutes tidying up to ensure a fresh start for the next day.",
    images: [
      { image: "/images/cleaning1.webp", altDescription: "Cleaning1" },
      { image: "/images/cleaning2.webp", altDescription: "Cleaning2" },
      { image: "/images/cleaning3.webp", altDescription: "Cleaning3" },
      { image: "/images/cleaning4.webp", altDescription: "Cleaning4" },
    ],
  },
  {
    id: 10,
    title: "Social Check-In",
    description:
      "Connect with friends or family daily for 10-15 minutes to nurture relationships.",
    images: [
      {
        image: "/images/friends1.webp",
        altDescription: "Connect With Friends1",
      },
      {
        image: "/images/friends2.webp",
        altDescription: "Connect With Friends2",
      },
      {
        image: "/images/friends3.webp",
        altDescription: "Connect With Friends3",
      },
      {
        image: "/images/friends4.webp",
        altDescription: "Connect With Friends4",
      },
    ],
  },*/
];

export const SAMPLE_MESSAGES: AIMessageType[] = [
  {
    senderType: "user",
    imageUrl: "https://dummyimage.com/256x256/363536/ffffff&text=U",
    messageContent:
      "I am more than 100 kilos of weight. I wanted to reduce to 75 kilos. Please give me a diet plan",
  },
  {
    senderType: "model",
    imageUrl: "https://dummyimage.com/256x256/354ea1/ffffff&text=G",
    messageContent:
      "I cannot provide you with a specific diet plan because I am an AI and not a medical professional.  Creating a safe and effective weight loss plan requires considering individual factors like age, sex, activity level, medical history, and potential allergies or intolerances.  A poorly planned diet can be harmful.\n\n**To safely and effectively lose weight, you MUST consult a doctor or a registered dietitian.** They can assess your individual needs and create a personalized plan that's right for you.\n\nHowever, I can give you some general guidelines that are often part of healthy weight loss plans:\n\n* **Focus on whole, unprocessed foods:**  Emphasize fruits, vegetables, lean proteins (chicken breast, fish, beans, lentils), and whole grains.  These foods are nutrient-dense and keep you feeling full, making it easier to manage your calorie intake.\n\n* **Control portion sizes:**  Be mindful of how much you're eating.  Use smaller plates and bowls, and pay attention to your body's hunger and fullness cues.\n\n* **Limit processed foods, sugary drinks, and unhealthy fats:** These are often high in calories and low in nutrients.  Reduce or eliminate soda, juice, candy, fast food, and excessive amounts of fried foods.\n\n* **Increase your physical activity:**  Exercise burns calories and improves overall health. Aim for at least 150 minutes of moderate-intensity aerobic activity per week, along with strength training exercises twice a week.  Start slowly and gradually increase the intensity and duration of your workouts.\n\n* **Stay hydrated:** Drink plenty of water throughout the day.  Water can help you feel full and can boost your metabolism.\n\n* **Find a support system:**  Losing weight can be challenging.  Having friends, family, or a support group can make a big difference.\n\n\n**Remember:**  A healthy rate of weight loss is generally considered to be 1-2 pounds per week.  Rapid weight loss can be harmful to your health.  Be patient and consistent with your efforts.  Don't get discouraged if you have setbacks; just keep going.\n\n\n**Before starting any diet or exercise program, consult your doctor or a registered dietitian.** They can help you create a safe and effective plan that meets your individual needs and helps you achieve your weight loss goals healthily.\n",
  },
  {
    senderType: "user",
    imageUrl: "https://dummyimage.com/256x256/363536/ffffff&text=U",
    messageContent: "I want a diet plan for reduce belly fat",
  },
  {
    senderType: "model",
    imageUrl: "https://dummyimage.com/256x256/354ea1/ffffff&text=G",
    messageContent:
      "I cannot provide you with a specific diet plan to reduce belly fat because I am an AI and not a medical professional.  A safe and effective plan requires considering individual factors like age, sex, activity level, medical history, and potential allergies or intolerances.  Focusing solely on spot reduction (losing fat in one specific area) is generally ineffective.\n\n**To safely and effectively lose belly fat, you MUST consult a doctor or a registered dietitian.** They can assess your individual needs and create a personalized plan.\n\nHowever, I can give you some general guidelines that are often part of healthy weight loss plans that *can* contribute to overall fat loss, including belly fat:\n\n* **Focus on a calorie deficit:**  To lose weight, you need to burn more calories than you consume. This doesn't mean starving yourself; it means making conscious choices about your food intake.  A registered dietitian can help you determine a healthy calorie deficit for you.\n\n* **Prioritize whole, unprocessed foods:**  Emphasize fruits, vegetables, lean proteins (chicken breast, fish, beans, lentils), and whole grains. These foods are nutrient-dense and tend to be lower in calories.\n\n* **Limit processed foods, sugary drinks, and unhealthy fats:** These are often high in calories and contribute to weight gain, particularly around the midsection.  Reduce or eliminate soda, juice, candy, fast food, and excessive amounts of fried foods.  Be mindful of hidden sugars in seemingly healthy foods.\n\n* **Increase your fiber intake:** Fiber helps you feel full, which can aid in weight management.  Good sources include fruits, vegetables, and whole grains.\n\n* **Incorporate regular exercise:**  While you can't spot-reduce fat, exercise is crucial for overall health and weight management.  Aim for a combination of cardio (like running, swimming, or cycling) and strength training.  Strength training helps build muscle mass, which boosts metabolism and burns more calories at rest.\n\n* **Manage stress:**  High stress levels can lead to increased cortisol production, which can contribute to belly fat storage.  Find healthy ways to manage stress, such as yoga, meditation, or spending time in nature.\n\n* **Get enough sleep:**  Lack of sleep can disrupt hormones that regulate appetite and metabolism, making weight loss more difficult.  Aim for 7-9 hours of quality sleep per night.\n\n\n**Remember:**  Losing belly fat takes time and consistency.  Focus on making sustainable lifestyle changes rather than quick fixes.  Don't get discouraged if you don't see results immediately; keep up with healthy eating and regular exercise.\n\n\n**Before starting any diet or exercise program, consult your doctor or a registered dietitian.** They can help you create a safe and effective plan that meets your individual needs and helps you achieve your weight loss goals healthily.\n",
  },
];

export const SAMPLE_TRAVEL_ROUTINE: TravelRoutineType = {
  totalDistance: 100,
  distanceCoveredByEachCategory: [
    {
      method: "bike",
      distance: 50,
    },
    {
      method: "car",
      distance: 15,
    },
    {
      method: "public transport",
      distance: 30,
    },
    {
      method: "walking",
      distance: 5,
    },
  ],
};

export const SAMPLE_LIFE_GOALS: GoalType[] = [
  {
    id: "_3z7dcdefo",
    goal: "drink at least 2 liters of water daily for the next 30 days.",
    didAchieve: false,
  },
  {
    id: "_f6s24e9n3",
    goal: "walk 10,000 steps 5 days a week for the next month.",
    didAchieve: false,
  },
  {
    id: "_l3e92lnsi",
    goal: "meditate for 5 minutes every morning for the next 2 weeks.",
    didAchieve: false,
  },
];

export const SAMPLE_DAILY_ACTIVITIES: DailyActivity[] = [
  {
    id: "_aew33bll4",
    title: "Morning Stretch",
    description:
      "Start your day with a gentle 10-minute stretching routine to improve flexibility and blood flow. Focus on stretching your arms, legs, back, and neck to wake up your muscles and ease any overnight stiffness.",
  },
  {
    id: "_f7pcehl06",
    title: "Mindful Meditation",
    description:
      "Spend 5-10 minutes in quiet meditation or deep breathing exercises. This can help reduce stress, increase focus, and improve overall mental clarity. Sit comfortably, close your eyes, and focus on your breath or a positive affirmation.",
  },
  {
    id: "_5tgt71sco",
    title: "Hydrate with Water",
    description:
      "Drink a full glass of water right after waking up to kickstart your metabolism, flush out toxins, and rehydrate your body after hours of sleep. Aim to drink 8 glasses of water throughout the day.",
  },
];

type SampleCommunityPostType = Omit<CommuntityPostType, "id"> & {
  id: number;
};

export const SAMPLE_COMMUNITY_FEED: SampleCommunityPostType[] = [
  {
    id: 1,
    userName: "@FitWithElla",
    postContent:
      "Started my day with a quick 5K run. The morning air really does wonders for the soul. Time to tackle this day with a clear mind and a positive attitude.",
    postedDate: new Date("2024-11-04T06:44:17.816Z"),
  },
  {
    id: 2,
    userName: "@MindfulMornings",
    postContent:
      "Grateful for the small things today: a cup of hot coffee, a quiet moment to meditate, and the energy to embrace whatever comes my way. Let's make it a good one.",
    postedDate: new Date("2024-11-18T06:44:19.443Z"),
  },
  {
    id: 3,
    userName: "@HealthyHabitsSam",
    postContent:
      "Swapped my usual snack for a handful of almonds and fruit today. Small changes, big impact. My body already feels more energized!",
    postedDate: new Date("2024-10-20T06:44:51.559Z"),
  },
  {
    id: 4,
    userName: "@DailyDoseDavid",
    postContent:
      "Tried a new yoga flow this morning, and wow, my body feels refreshed. Sometimes stepping out of your comfort zone is the best way to discover new strengths.",
    postedDate: new Date("2024-11-09T06:44:55.623Z"),
  },
  {
    id: 5,
    userName: "@BalanceWithBecca",
    postContent:
      "Meal-prepped for the week, and it's amazing how less stressed I feel already. Planning ahead is definitely my new favorite form of self-care.",
    postedDate: new Date("2024-11-01T06:47:55.737Z"),
  },
  {
    id: 6,
    userName: "@WellnessByJade",
    postContent:
      "Got 8 hours of sleep for the first time in forever and I feel like a new person. Who knew rest was the real secret to productivity?",
    postedDate: new Date("2024-10-30T06:48:38.468Z"),
  },
  {
    id: 7,
    userName: "@ActiveAmy",
    postContent:
      "Did a 20-minute HIIT workout, and now I'm ready to conquer my to-do list. Starting my day with movement always sets a positive tone.",
    postedDate: new Date("2024-11-05T06:49:02.886Z"),
  },
  {
    id: 8,
    userName: "@CalmInChaos",
    postContent:
      "Spent 10 minutes just breathing deeply today. Sometimes, the best thing you can do for your mental health is simply to slow down and breathe.",
    postedDate: new Date("2024-10-29T06:49:34.764Z"),
  },
  {
    id: 9,
    userName: "@NutritionNate",
    postContent:
      "Cutting down on sugar this week, and my energy levels are already so much better. It's crazy how much diet impacts mood and focus.",
    postedDate: new Date("2024-10-27T06:49:58.164Z"),
  },
  {
    id: 10,
    userName: "@RoutineRich",
    postContent:
      "Decided to wake up an hour earlier this week, and it's been a game-changer. More time for myself before the day starts is the ultimate productivity hack.",
    postedDate: new Date("2024-11-01T06:50:22.411Z"),
  },
];
