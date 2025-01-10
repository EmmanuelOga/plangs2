# Plangs! AI

Use OpenAI to enrich the data for programming languages.

The objective is to generate a "first pass" of the data for each or some language,
which can then be manually adjusted.

If the process fails, usually is because the number of tokens on the data we feed to the prompt is too big, or because one or all of the websites for the language are not reachable. If this happens, the file chars limit can be tweaked, or URLs can be removed, etc.

Once the generation finishes, extensive review is recommneded, to ensure the quality of the data (this is what pull requests are for! :-).

## TODO

* Better handle the token limit. Right now we just trim each input to a max of chars, which anecdotally works for the list of languages we have today (Nov 2024).
* Retry HTTP errors with backoff.
* Better error handling: we should produce a nice tidy list of errors per language, and perhaps print a command that could be copy-pasted to retry the failed languages, etc.
* Or we could perhaps cache the results so a re-run won't touch the languages that were processed recently.
* Ideally we would be able to trigger this process from /edit.