<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application rules
- Keep bejakeun's landing page at the index route and its interactive simulation in a separate browser-safe component, so marketing and demo state remain independent.
- Simulation data lives only in React state and resets on reload; it must never send messages or make AI/API calls, keeping the prototype lightweight and honest.
- Define visual roles in the global CSS and use shared Button variants for actions, keeping brand styling consistent.