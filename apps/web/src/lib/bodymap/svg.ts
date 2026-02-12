import type { BodyEntity } from '$lib/types/bodymap';

type WireHandlers = {
	onSelect?: (entity: BodyEntity) => void;
};

export function wireSvg(
	container: HTMLElement,
	byId: Record<string, BodyEntity>,
	handlers: WireHandlers = {}
) {
	// Select anything with a class
	const elements = container.querySelectorAll<SVGElement>('[class]');

	elements.forEach((el) => {
		const classes = Array.from(el.classList);

		// first class that matches an entity id
		const key = classes.find((c) => c in byId);
		if (!key) return;

		const entity = byId[key];

		// only apply your inline styling if it's a node
		if (entity.type === 'node') {
			el.style.fill = 'white';
			el.style.stroke = '#646464';
		}

		el.style.cursor = 'pointer';

		el.addEventListener('mouseenter', () => {
			el.style.opacity = '0.85';
		});

		el.addEventListener('mouseleave', () => {
			el.style.opacity = '1';
		});

		el.addEventListener('click', (ev) => {
			ev.preventDefault();
			ev.stopPropagation();
			handlers.onSelect?.(entity);
		});
	});
}

/**
 * Clears inline styles + removes event listeners by cloning nodes.
 * Use this when the SVG DOM stays mounted and you re-bind to new data.
 */
export function resetSvg(container: HTMLElement) {
	// Only touch elements we might have wired (classed hit areas / nodes)
	const els = container.querySelectorAll<SVGElement>('[class]');

	els.forEach((el) => {
		// clear any inline styles you applied
		el.style.fill = '';
		el.style.stroke = '';
		el.style.opacity = '';
		el.style.cursor = '';
		el.style.pointerEvents = '';
		// add any others you used:
		// el.style.filter = '';
		// el.style.transform = '';

		// IMPORTANT: remove listeners by replacing node with a clone
		// cloneNode(true) keeps attributes + children, but drops listeners
		const clone = el.cloneNode(true) as SVGElement;
		el.replaceWith(clone);
	});
}
