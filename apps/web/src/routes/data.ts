

export const data = {
    font: '',
    entities: [
        // 3 mothers
        {
            type: 'region',
            region: 'head',
            tags: ['letter:shin', 'value:300', 'glyph:tooth', 'mother:fire'],
            title: 'Shin — Crown of Differentiation',
            description:
                'Shin signifies fire, ignition, and differentiation. Associated with the head, it governs activation, perception, and the emergence of distinction. Like fire, Shin separates and clarifies, transforming latent potential into articulated form. It is the force through which awareness ignites and expression begins.',
            contains: [
                'left_ear',
                'right_ear',
                'left_eye',
                'right_eye',
                'left_nostril',
                'right_nostril',
                'mouth'
            ]
        },
        {
            type: 'region',
            region: 'diaphragm',
            tags: ['letter:aleph', 'value:1', 'glyph:ox', 'mother:air'],
            title: 'Aleph — Axis of Breath',
            description:
                'Aleph signifies balance, mediation, and breath. As the axis of the body, it governs equilibrium between opposing forces. Neither active nor passive, Aleph sustains life by maintaining proportion and rhythm. Through breath, it harmonizes fire and water, motion and stillness, ensuring that all action remains centered.',
                contains: [
                    'heart',
                    'right_lung',
                    'left_lung'
                ]
        },
        {
            type: 'region',
            region: 'torso',
            tags: ['letter:mem', 'value:40', 'glyph:water', 'mother:water'],
            title: 'Mem — Depth of the Body',
            description: 'Mem signifies enclosure, depth, and the primordial waters. Associated with the torso and interior of the body, it governs containment and gestation. Mem holds substance in potential, allowing form to mature within protected depth. It is the field in which processes unfold before they are expressed.',
            contains: [
              'liver',
              'stomach',
              'left_kidney',
              'right_kidney',
              'gall_bladder',
              'spleen',
              'small_intestine',
              'large_intestine',
              'left_hand',
              'right_hand',
              'left_foot',
              'right_foot' 
            ]
          },
        
        //   7 doubles
        {
            type: 'node',
            node: 'right_ear',
            tags: ['value:20', 'glyph:palm of hand', 'planet:saturn', 'seven:doubles'],
            title: 'Kaph — Right Ear',
            description:
                'Kaph signifies the palm, the act of grasping and shaping. Associated with the right ear, it governs how sound is received and held. Hearing is not passive; through Kaph, auditory impressions are molded into form, allowing meaning to be contained rather than merely passing through.'
        },
        {
            type: 'node',
            node: 'right_eye',
            tags: ['value:3', 'glyph:leg', 'planet:jupiter', 'seven:doubles'],
            title: 'Gimel — Right Eye',
            description:
                'Gimel represents movement and conveyance, symbolized by the leg. In the right eye, it governs directed vision — the forward motion of sight toward an object. Vision here is active pursuit, extending awareness outward to bridge distance.'
        },
        {
            type: 'node',
            node: 'right_nostril',
            tags: ['value:200', 'glyph:head', 'planet:sun', 'seven:doubles'],
            title: 'Resh — Right Nostril',
            description:
                'Resh signifies the head, origin, and initiation. Through the right nostril, it governs the intake of breath as a primary life impulse. Respiration here marks the continual renewal of presence, drawing vitality inward from its source.'
        },
        {
            type: 'node',
            node: 'mouth',
            tags: ['value:2', 'glyph:house', 'planet:mercury', 'seven:doubles'],
            title: 'Bet — Mouth',
            description:
                'Bet symbolizes the house, the interior space that receives and gives form. As the mouth, it is the primary vessel of articulation — where breath, thought, and substance enter structured expression. Speech and nourishment alike are housed and ordered through Bet.'
        },
        {
            type: 'node',
            node: 'left_ear',
            tags: ['value:80', 'glyph:mouth', 'planet:venus', 'seven:doubles'],
            title: 'Pe — Left Ear',
            description:
                'Pe signifies the mouth, expression, and utterance. In the left ear, it governs receptive hearing that prepares for response. What is heard here is oriented toward reply, interpretation, and eventual articulation.'
        },
        {
            type: 'node',
            node: 'left_eye',
            tags: ['value:4', 'glyph:door', 'planet:mars', 'seven:doubles'],
            title: 'Dalet — Left Eye',
            description:
                'Dalet represents the door, the threshold between inside and outside. Through the left eye, it governs selective vision — the ability to open or close perception. Sight here is discernment, regulating what is admitted into awareness.'
        },
        {
            type: 'node',
            node: 'left_nostril',
            tags: ['value:400', 'glyph:mark', 'planet:moon', 'seven:doubles'],
            title: 'Taw — Left Nostril',
            description:
                'Taw signifies the mark, seal, and completion. Associated with the left nostril, it governs the termination and release of breath. Respiration here marks closure and return, sealing the cycle of intake with completion.'
        },
        // 12 elementals
        {
            type: 'node',
            node: 'liver',
            tags: ['value:70', 'glyph:eye', 'zodiac:capricorn', 'twelve:elementals'],
            title: 'Ayin — Liver',
            description:
                'Ayin signifies the eye — not as free vision, but as perception shaped by weight and endurance. Associated with the liver, Ayin governs the capacity to bear, store, and govern substance over time. Under Capricorn, the liver becomes the seat of judgment and restraint, where impressions are held, assessed, and integrated into lasting form. What is seen through Ayin is not fleeting; it is weighed, retained, and carried.'
        },
        {
            type: 'node',
            node: 'gall_bladder',
            tags: ['value:30', 'glyph:ox-goad', 'zodiac:libra', 'twelve:elementals'],
            title: 'Lamed — Gallbladder',
            description:
                'Lamed signifies direction, impetus, and the act of guidance. Associated with the gallbladder, it governs discernment and decisive separation. Where the liver bears and stores weight, the gallbladder responds by cutting, directing, and clarifying. Under Libra, it mediates judgment and balance, determining when action must be taken and when restraint is required. The gallbladder thus converts stored substance into directed movement.'
        },
        {
            type: 'node',
            node: 'right_kidney',
            tags: ['value:6', 'glyph:hook', 'zodiac:taurus', 'twelve:elementals'],
            title: 'Vav — Right Kidney',
            description:
                'Vav signifies connection, fastening, and continuity. Associated with the right kidney, it governs counsel rooted in stability and preservation. The kidney weighs impulse against endurance, binding action to consequence. Under Taurus, Vav anchors judgment in sustained value, ensuring that decisions are joined to what can be borne over time. The right kidney thus serves as a silent advisor, linking perception and will to the demands of continuity.'
        },
        {
            type: 'node',
            node: 'right_hand',
            tags: ['value:8', 'glyph:enclosure', 'zodiac:cancer', 'twelve:elementals'],
            title: 'Chet — Right Hand',
            description:
                'Chet signifies enclosure, boundary, and protected action. Associated with the right hand, it governs deliberate doing within limits. Action here is not impulsive force but contained execution, shaped by awareness of consequence. Under Cancer, the right hand acts to preserve, defend, and sustain what has been judged worthy. It extends will into the world while maintaining protective boundaries around what is held.'
        },
        {
            type: 'node',
            node: 'small_intestine',
            tags: ['value:50', 'glyph:fish', 'zodiac:scorpio', 'twelve:elementals'],
            title: 'Nun — Small Intestine',
            description:
                'Nun signifies continuation through division, symbolized by the fish. Associated with the small intestine, it governs the unseen sorting that allows life to persist within constant flow. As the fish survives by filtering its environment from within, the small intestine extracts what sustains life while releasing what cannot be retained. Under Scorpio, this work is hidden, precise, and essential to survival.'
        },
        {
            type: 'node',
            node: 'right_foot',
            tags: ['value:5', 'glyph:window', 'zodiac:aries', 'twelve:elementals'],
            title: 'He — Right Foot',
            description:
                'He signifies opening, emergence, and outward revelation. Associated with the right foot, it governs initiation into movement — the first step that carries intention into the world. Under Aries, the right foot embodies decisive advance, breaking inertia and establishing direction. Movement here is not wandering but declaration: an opening through which will enters action.'
        },
        {
            type: 'node',
            node: 'stomach',
            tags: ['value:60', 'glyph:support', 'zodiac:sagittarius', 'twelve:elementals'],
            title: 'Samekh — Stomach',
            description:
                'Samekh signifies support, holding, and sustained containment. Associated with the stomach, it governs the capacity to receive substance without immediate division or judgment. Under Sagittarius, the stomach stabilizes intake so that nourishment can be borne and oriented before refinement begins. Samekh does not transform; it upholds. By supporting what enters, the stomach preserves continuity and prevents collapse, allowing subsequent processes to act with clarity.'
        },
        {
            type: 'node',
            node: 'spleen',
            tags: ['value:100', 'glyph:monkey', 'zodiac:pisces', 'twelve:elementals'],
            title: 'Qof — Spleen',
            description:
                'Qof signifies imitation, reflection, and the persistence of form after intention has faded. Symbolized by the monkey, it governs the repetition and regulation that occur when structure loosens. Associated with the spleen, Qof moderates residue and excess, recycling what remains when decisive action has passed. Under Pisces, this function is diffuse and adaptive, preserving continuity through mimicry and adjustment rather than command. Qof does not originate order; it sustains the system when order dissolves.'
        },
        {
            type: 'node',
            node: 'left_kidney',
            tags: ['value:9', 'glyph:wheel with mark', 'zodiac:leo', 'twelve:elementals'],
            title: 'Tet — Left Kidney',
            description:
                'Tet signifies contained circulation — motion held within a marked boundary. Often depicted as a wheel with a central sign, it represents energy that turns inward rather than dispersing outward. Associated with the left kidney, Tet governs counsel through internal pressure and continual reassessment. Under Leo, this circulation concerns confidence, strength, and readiness. The left kidney advises not by restraint alone, but by monitoring whether inner vitality can continue to turn without rupture.'
        },
        {
            type: 'node',
            node: 'large_intestine',
            tags: ['value:90', 'glyph:hook', 'zodiac:aquarius', 'twelve:elementals'],
            title: 'Tsadi — Large Intestine',
            description:
                'Tsadi signifies drawing forth, rectification, and the final extraction of value. Associated with the large intestine, it governs the completion of separation through release. Where the small intestine divides in order to continue life, the large intestine gathers what remains and determines what must exit the system. Under Aquarius, this function is collective and corrective, restoring balance by removing excess. Tsadi does not refine; it resolves, ensuring that what no longer serves is released without distortion.'
        },
        {
            type: 'node',
            node: 'left_hand',
            tags: ['value:10', 'glyph:hand / point', 'zodiac:virgo', 'twelve:elementals'],
            title: 'Yod — Left Hand',
            description:
                'Yod signifies the point of origin — the smallest mark from which form emerges. Associated with the left hand, it governs precise adjustment, fine control, and corrective action. Where the right hand enacts contained force, the left hand refines and recalibrates. Under Virgo, this function is analytical and exacting, applying minimal movement to achieve maximum alignment. The left hand does not assert; it perfects.'
        },
        {
            type: 'node',
            node: 'left_foot',
            tags: ['value:7', 'glyph:blade', 'zodiac:gemini', 'twelve:elementals'],
            title: 'Zayin — Left Foot',
            description:
                'Zayin signifies the tool or blade — the capacity to adjust movement through precision rather than force. Associated with the left foot, it governs modulation of motion: balance, redirection, and responsiveness while in transit. Where the right foot initiates advance, the left foot corrects and adapts. Under Gemini, this function is agile and relational, allowing movement to respond intelligently to changing conditions rather than proceeding blindly.'
        }
    ]
}