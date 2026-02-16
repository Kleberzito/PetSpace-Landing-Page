# AI Coding Agent Guidelines - Teste PL

## Project Overview
**Teste PL** is a web project starting with a minimal footprint. This is a fresh development environment for building web applications.

## Architecture & File Organization

### Current Structure
- `index.html` - Entry point for the web application
- `.github/` - Repository configuration and agent instructions (this file)

### Expected Growth Areas
When expanding, follow this structure:
```
├── assets/          # Images, fonts, static resources
├── css/             # Stylesheets (organize by component/page)
├── js/              # JavaScript files (separate concerns by feature)
├── lib/             # Third-party libraries or utilities
└── index.html       # Main entry point
```

## Development Conventions

### HTML Structure
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<footer>`, etc.)
- Include proper viewport meta tag and basic SEO tags in all HTML documents
- Maintain clean, indented code for readability

### CSS Organization
- Prefer modular/component-based CSS over monolithic stylesheets
- Use consistent naming conventions for CSS classes (e.g., BEM: `component__element--modifier`)
- Responsive design first - mobile breakpoints should be considered from the start

### JavaScript Patterns
- Keep JavaScript modular; prefer separate files for distinct features
- Use vanilla JS unless external frameworks are explicitly needed
- Include error handling and graceful degradation

## Build & Development Workflow

Currently running without a build system. If tooling is needed:
- Use standard HTML/CSS/JS files first (no build overhead if not required)
- Document any build commands in a `Makefile`, `package.json` (if Node-based), or in a `DEVELOPMENT.md` file

## Dependencies & Integration

### No External Dependencies Currently
- Ensure any new libraries added are justified and documented
- Prefer Web APIs over shims when possible (fetch, LocalStorage, etc.)

### Browser Compatibility
- Target modern browsers (ES6+); specify support matrix if constraints apply
- Test on Chrome, Firefox, Safari, and Edge

## Code Quality & Testing

### Standards
- Keep functions small and focused
- Add clear comments for non-obvious logic
- Use consistent indentation (2 spaces for web files)

### Future Testing
- When tests are added, place in a `tests/` or `__tests__/` directory
- Use descriptive test names that document expected behavior

## Common Tasks

### Adding New Pages
1. Create new `.html` file in root or appropriate subdirectory
2. Include shared header/footer (either duplicated or via template system)
3. Link to CSS and JS resources consistently

### Adding Styles
1. Create `.css` file in `css/` directory
2. Link in HTML `<head>` tag
3. Keep selectors scoped to component when possible

### Adding Functionality
1. Create `.js` file in `js/` directory
2. Document public methods and parameters
3. Initialize scripts after DOM is ready (use `DOMContentLoaded` event or place script at end of body)

## Tips for AI Agents

- **Consistency Over Cleverness**: Match existing code patterns even if a "better" approach exists
- **Semantic HTML First**: Use proper HTML structure before adding CSS/JS workarounds
- **Minimal Dependencies**: Suggest vanilla solutions before proposing external libraries
- **Documentation**: Explain *why* architectural choices are made, not just *what* was done
- **Mobile-First**: Always consider mobile experience when proposing layouts or interactions

