# ⚙️ Design System — React + TypeScript + Storybook

A minimal, reusable, and accessible design system built with **React**, **TypeScript**, and **Storybook**. This project includes a few essential UI components that can be extended into a full-fledged design library.

✅ Built Components:
- Toast (Feedback Notifications)
- TextInput (Form Field)
- Typography System (Headings & Paragraphs)

---

## 📦 Tech Stack

- **React** (Functional Components + Hooks)
- **TypeScript**
- **Storybook** — for component development and documentation
- **Tailwind CSS** — for clean and responsive styling
- **ESLint + Prettier** — for code quality

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Rehan9-12/Design-system.git
cd Design-system
2. Install Dependencies
bash
Copy
Edit
npm install
3. Run Storybook
bash
Copy
Edit
npm run storybook
Now open http://localhost:6006 to explore the components.
```
🧱 Components
1. 🔔 Toast
Displays feedback messages like success, error, warning, and info.

Features:
Auto-dismiss timeout

Mount/unmount animation

Variants with icons

ARIA roles for accessibility

Keyboard friendly

Responsive & customizable

Example:
tsx
Copy
Edit
```
<Toast type="success" message="Saved successfully!" />
```
2. ✍️ TextInput
A basic form input field with label and placeholder.

Features:
Label and placeholder support

Optional onChange handler

Keyboard & screen reader accessible

Theming ready with Tailwind

Example:
tsx
Copy
Edit
```
<TextInput label="Username" placeholder="Enter your name" />
```
3. ✒️ Typography System
Consistent styled text components (H1, H2, P, etc.) for layout and readability.

Example:
tsx
Copy
Edit
```
<H1>Design System</H1>
<P>This project showcases reusable UI components.</P>
```
📁 Folder Structure
```
bash
Copy
Edit
/src
  /components
    /Toast
    /TextInput
    /Typography
  /stories
    Toast.stories.tsx
    TextInput.stories.tsx
    Typography.stories.tsx
  index.ts
```

🙌 Author
Made with ❤️ by Mohammad Rehan
