export const WEBSITE_ROUTES = [
    { path: '', loadChildren: () => import('../website/website.module').then((m) => m.WebsiteModule) },
    { path: 'problem-solving', loadChildren: () => import("../problem-solving/problem-solving.module").then(x => x.ProblemSolvingModule) },
    { path: 'english-verbal', loadChildren: () => import("../english-verbal/english-verbal.module").then(x => x.EnglishVerbalModule) },
    { path: 'interview-presentation', loadChildren: () => import("../interview-presentation/interview-presentation.module").then(x => x.InterviewPresentationModule) }
];