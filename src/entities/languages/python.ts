import { ETables, VTables } from '../../tables';

export function define(vt: VTables, et: ETables) {
    vt.plang.set('pl+python', {
        name: 'Python',
        urls: [
            { kind: 'homepage', url: 'https://www.python.org/' },
            { kind: 'repository', url: 'https://github.com/python/cpython' },
            { kind: 'releases', url: 'https://www.python.org/downloads/' },
            { kind: 'apidocs', url: 'https://docs.python.org/3' },
            { kind: 'other', url: 'https://en.wikipedia.org/wiki/Python_(programming_language)' }
        ],
        firstAppeared: '1991-02-20',
        releases: [
            { version: '3.12.4', date: '2024-06-06', tags: ['stable'] },
        ],
    });

    vt.person.set('person+guido', { name: 'Guido van Rossum' });

    et.peopleAny.set({ from: 'person+guido', to: 'pl+python' }, { role: 'designer' });

    const types: `plts+${string}`[] = [
        'plts+oop', 'plts+duck', 'plts+dynamic', 'plts+strong', 'plts+optional'
    ];

    for (const ts of types) {
        et.plangTypesys.connect({ from: 'pl+python', to: ts });
    }
}
