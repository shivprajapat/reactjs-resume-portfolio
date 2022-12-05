import { About, Contact, Home, Portfolio, Resume, Skills } from "../containers";

export const routerData=[
    {path:"/",pageName:<Home/>},
    {path:"/about",pageName:<About/>},
    {path:"/skills",pageName:<Skills/>},
    {path:"/resume",pageName:<Resume/>},
    {path:"/portfolio",pageName:<Portfolio/>},
    {path:"/contact",pageName:<Contact/>},
]