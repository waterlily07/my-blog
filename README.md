# Mansha Mehra / Portfolio

This is my personal portfolio as a first-year BCA student. I built it to show how I am learning through small, useful projects, clear interfaces, and steady practice with Python and JavaScript.

The visual direction mixes a warm, modern-retro canvas with a simple portfolio structure: terracotta colours, paper textures, sticker-like geometry, a project gallery, and a small interactive CGPA tool.

## What is inside

- A responsive portfolio page with selected project experiments.
- Project filters for web work and Python utilities.
- An interactive CGPA estimator in React, based on the same weighted-average idea as `python/cgpa_calculator.py`.
- Beginner Python practice in `python/`, including a CGPA calculator and expense summary utility.
- A small set of local visual assets adapted from the companion `cozy-retro-canvas` project.

## Run it locally

```bash
npm install
npm start
```

The app opens at `http://localhost:3000`.

To create a production build:

```bash
npm run build
```

To try the Python examples:

```bash
python python/cgpa_calculator.py
python python/expense_summary.py
```

## Stack

React, JavaScript, CSS, Python, and Create React App. The project stays dependency-light so it remains easy to understand while I build my foundations.

## Next steps

The portfolio currently showcases the direction of each project, while the CGPA and expense utilities are already runnable. Future development will make every featured project independently runnable from the repository:

- Give each project its own folder with source code and a focused README.
- Add a clear run command for every project, such as `npm start` or `python main.py`.
- Link each portfolio card to its project folder, live demo, or GitHub repository.
- Replace the example project descriptions with finished coursework and real demos.
- Add tests for the Python utilities and document expected sample output.
- Connect the contact details to real professional profiles as they are ready.
