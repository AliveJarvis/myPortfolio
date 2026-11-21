# Arjun Kumar · Portfolio design

## Identity

The portrait opens the story. A circular frame and fine cyan arcs surround it on Home, an arch crops the same photograph on About, and a partial arc closes each page at Contact. The images of the work retain their original colors. Section links use the actual headings or project names so visitors can go straight to a piece of work, a skill group, or a contact method.

## Color and material

| Role | Midnight | Daylight |
| --- | --- | --- |
| Canvas | `#080D18` | `#F3F8FB` |
| Raised surface and menu | `#111B2E` | `#FFFFFF` |
| Primary type | `#F1F5F9` | `#101D33` |
| Reading text | `#B5C6D9` | `#40536A` |
| Accent text and focus | `#38BDF8` | `#006385` |
| Action fill and type | `#38BDF8` / `#080D18` | `#075978` / `#FFFFFF` |
| Hairlines | `#2E425C` | `#C2D3E0` |

The semantic variables in `src/styles/globals.css` drive the layout, CSS effects, and Tailwind color utilities. Use the accent for an available action, a selected item, or a reading position. Keep body copy on quiet surfaces. A low-opacity grid gives the portrait depth. The project galleries use a separate matte to frame screenshots across both themes.

## Type and rhythm

Local variable Inter sets navigation, headings, and prose. The italic serif surname, archive title, and closing project sentence give those moments a different pace. System monospace identifies locations, technology tags, and gallery positions. Keep prose near 52 characters per line on Home. The shared shell aligns the masthead, section indexes, media, and contact area. Section spacing scales from compact mobile blocks to generous desktop spreads.

## Page composition

- **Home** introduces Arjun, presents the interactive work index, then the grouped skills. Each touch layout includes its project screenshot directly in the link.
- **Projects** opens with a linked index of the six existing projects. A screenshot gallery sits beside each description and follows longer text within the article. On narrow screens the image and controls precede the description.
- **About** pairs the portrait with the introduction, then follows the experience and education timelines. Certificates remain alongside the entries they document.
- **Contact** is reachable from the sticky header on every page. Email, Call, and WhatsApp have visible labels and theme-colored icons. Send Message follows the existing credential gate.
- **Theme** uses a keyboard-operable listbox. The icon, selection mark, highlighted option, border, and focus ring draw from the active theme. System follows the device setting. An explicit preference survives reloads.

## Motion and input

The name rises through two masks on entry. As the hero leaves the viewport, the portrait shifts inside its frame and the surrounding arcs rotate. Section headings reveal as they enter, and timeline and header rules track reading progress. These scroll-linked effects retrace their positions as the visitor scrolls upward. Browsers without native scroll timelines show the composed static state.

A fine pointer tilts the portrait and active project preview and draws the contents of primary controls slightly toward the pointer. Their hit targets stay fixed. Touch visitors can scroll normally, tap a project directly, and swipe or step through its gallery. Keyboard focus updates the desktop preview. Reduced motion removes pointer tracking, parallax, masks, and animated scrolling while preserving every control and destination.
