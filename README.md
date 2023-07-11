# Wierd Counter

What do you do when you have learnt a lot of frameworks and built a counter in all of them?
You create a `counter that uses all these frameworks`.

### What???

UI libraries are great, but getting them to work together is a big hassle, let alone state management.
But with the advent of site builders like [Astro](https://astro.build/) and client agonstic state-management libraries like [Nanostores](https://github.com/nanostores/nanostores), we can now use muliple UI frameworks in one project, as well as share state between them with virtually no additonal configuration.

In this counter,

- The display is made in `React`
- The increment button works in `Solid`
- The decrement button works in `Vue`
- The set count button works in `Svelte`

To know more about this, what [this video](https://www.youtube.com/watch?v=3Iz3D7cVi04) which served as the inspiration for this project. (Spoiler Alert: It features another one of my favourite libraries: `Tanstack Query`).
