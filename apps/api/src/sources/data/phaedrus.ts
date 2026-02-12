import { BodymapDataset } from "./types";

export const phaedrus: BodymapDataset = {
    id: 'phaedrus',
    label: 'Phaedrus',
    entities: [
    {
        id: 'head',
        type: 'region',
        tags: ['psyche:intellect', 'ascent:divine'],
        title: 'Nous — The Charioteer',
        description:
            'The head corresponds to the charioteer of the soul in the Phaedrus. It is the seat of reason (nous), whose task is not force but guidance: to see truth, recall the Forms, and direct the soul upward through vision rather than compulsion.',
        contains: ['eyes', 'brain']
    },
    {
        id: 'diaphragm',
        type: 'region',
        tags: ['psyche:thumos', 'force:motion'],
        title: 'Thumos — The Noble Horse',
        description:
            'The chest corresponds to thumos, the spirited element of the soul. In the Phaedrus, it is the noble horse: powerful, loyal to reason when rightly trained, and the source of courage, righteous anger, and upward momentum.',
        contains: ['heart', 'lungs']
    },
    {
        id: 'torso',
        type: 'region',
        tags: ['psyche:epithumia', 'descent:gravity'],
        title: 'Epithumia — The Wayward Horse',
        description:
            'The lower abdomen corresponds to epithumia, the appetitive and desiring element of the soul. In the Phaedrus, it is the unruly horse, driven by pleasure and hunger. It supplies raw force, but without guidance pulls the soul downward.',
        contains: ['liver', 'stomach']
    },
    {
        id: 'eyes',
        type: 'node',
        tags: ['faculty:vision', 'eros:awakening'],
        title: 'Vision — The Gate of Recollection',
        description:
            'In the Phaedrus, vision is the most privileged sense. Through beauty perceived by the eyes, the soul is reminded of the Forms it once beheld. Sight awakens eros and initiates the upward movement of recollection.'
    },
    {
        id: 'brain',
        type: 'node',
        tags: ['logos:judgment', 'memory:anamnesis'],
        title: 'Anamnesis — Recollection',
        description:
            'The brain corresponds to anamnesis, the soul’s power to recollect truth. Knowledge is not learned but remembered, and this remembering restores the wings of the soul.'
    },
    {
        id: 'heart',
        type: 'node',
        tags: ['thumos:courage', 'alignment:obedience'],
        title: 'Courage — The Ally of Reason',
        description:
            'The heart represents the spirited ally of reason. When aligned, it restrains appetite and lends force to ascent. When misaligned, it becomes rage or ambition divorced from truth.'
    },
    {
        id: 'lungs',
        type: 'node',
        tags: ['breath:motion', 'speech:rhythm'],
        title: 'Breath — Vehicle of Logos',
        description:
            'Breath is the medium through which logos becomes audible. In the Phaedrus, true rhetoric must be alive — adapted to the soul it addresses — just as breath animates speech.'
    },
    {
        id: 'liver',
        type: 'node',
        tags: ['desire:image', 'mirror:illusion'],
        title: 'Imagination — The Mirror of Appetite',
        description:
            'The liver corresponds to the soul’s capacity for images and reflections. It is where desire forms fantasies that can either be guided upward by beauty or distort perception through appetite.'
    },
    {
        id: 'stomach',
        type: 'node',
        tags: ['appetite:weight', 'pleasure:gravity'],
        title: 'Appetite — The Pull of the Earth',
        description:
            'The stomach symbolizes the gravitational pull of pleasure and necessity. In the Phaedrus, this force is not evil, but must be governed, lest it overpower the soul’s ascent.'
    }


]
};
