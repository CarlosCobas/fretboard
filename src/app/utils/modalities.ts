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
    'lidian': intervals,
    'mayor_scale': [
        intervals[0],
        intervals[2],
        intervals[4],
        intervals[5],
        intervals[7],
        intervals[9],
        intervals[11],
    ],
    'mixolidian': intervals,
    'dorian': intervals,
    'minor_scale': [
        intervals[0],
        intervals[2],
        intervals[3],
        intervals[5],
        intervals[7],
        intervals[8],
        intervals[11],
    ],
    'frigian': intervals,
    'locrian': intervals,
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