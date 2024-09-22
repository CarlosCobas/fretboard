import { intervals } from "./intervals";

export const modalities = [
    {
        'value': 'all_notes',
        'label': 'Ver todas las notas',
    },
    {
        'value': 'lidian',
        'label': 'Modo Lidio',
    },
    {
        'value': 'mayor_scale',
        'label': 'Modo Jóncio (Escala Mayor)',
    },
    {
        'value': 'mixolidian',
        'label': 'Modo Mixolidio',
    },
    {
        'value': 'dorian',
        'label': 'Modo Dórico',
    },
    {
        'value': 'minor_scale',
        'label': 'Modo Eólico (Escala Menor)',
    },
    {
        'value': 'frigian',
        'label':  'Modo Frigio',
    },
    {
        'value': 'locrian',
        'label': 'Modo Locrio',
    },
    {
        'value': 'min_apr',
        'label': 'Arpegios Menores',
    },
    {
        'value': 'may_arp',
        'label':  'Arpegios Mayores',
    },
    {
        'value': 'dim_arp',
        'label': 'Arpegios Disminuidos',
    },
];

export const valid_intervals = {
    'all_notes': intervals,
    'lidian': [
        intervals[0],
        intervals[2],
        intervals[4],
        intervals[6],
        intervals[7],
        intervals[9],
        intervals[11],
    ],
    'mayor_scale': [
        intervals[0],
        intervals[2],
        intervals[4],
        intervals[5],
        intervals[7],
        intervals[9],
        intervals[11],
    ],
    'mixolidian': [
        intervals[0],
        intervals[2],
        intervals[4],
        intervals[5],
        intervals[7],
        intervals[9],
        intervals[10],
    ],
    'dorian': [
        intervals[0],
        intervals[2],
        intervals[3],
        intervals[5],
        intervals[7],
        intervals[9],
        intervals[10],
    ],
    'minor_scale': [
        intervals[0],
        intervals[2],
        intervals[3],
        intervals[5],
        intervals[7],
        intervals[8],
        intervals[10],
    ],
    'frigian': [
        intervals[0],
        intervals[1],
        intervals[3],
        intervals[5],
        intervals[7],
        intervals[8],
        intervals[10],
    ],
    'locrian':  [
        intervals[0],
        intervals[1],
        intervals[3],
        intervals[5],
        intervals[6],
        intervals[8],
        intervals[10],
    ],
    'min_apr': [
        intervals[0],
        intervals[3],
        intervals[7],
    ],
    'may_arp': [
        intervals[0],
        intervals[4],
        intervals[7],
    ],
    'dim_arp': [
        intervals[0],
        intervals[3],
        intervals[6],
    ],
}


export const modes_data = [
   
    {
        'name': "Jónico",
        'order': 1,
        'signature': 'major',
        'intervals': valid_intervals['mayor_scale'],
    },
    {
        'name': "Dórico",
        'order': 2,
        'signature': 'minor',
        'intervals': valid_intervals['dorian'],
    },
    {
        'name': "Frigio",
        'order': 3,
        'signature': 'minor',
        'intervals': valid_intervals['frigian'],
    },
    {
        'name': "Lidio",
        'order': 4,
        'signature': 'major',
        'intervals': valid_intervals['lidian'],
    },
    {
        'name': "Mixolidio",
        'order': 5,
        'signature': 'major',
        'intervals': valid_intervals['mixolidian'],
    },
    {
        'name': "Eólico",
        'order': 6,
        'signature': 'minor',
        'intervals': valid_intervals['minor_scale'],
    },
    {
        'name': "Locrio",
        'order': 7,
        'signature': 'minor',
        'intervals': valid_intervals['locrian'],
    },
]