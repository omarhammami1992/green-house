import question1Image1 from '../../../assets/images/q1/PETI.PNG';
import question1Image2 from '../../../assets/images/q1/INTERMEDIARE.PNG';
import question1Image3 from '../../../assets/images/q1/GRAND.PNG';

import question2Image1 from '../../../assets/images/q2/interieur.png';
import question2Image2 from '../../../assets/images/q2/exterieur.png';
import question2Image3 from '../../../assets/images/q2/balcon.png';

import question3Image1 from '../../../assets/images/q3/ensoleille.png';
import question3Image2 from '../../../assets/images/q3/mi-ambre.png';
import question3Image3 from '../../../assets/images/q3/ombre.png';

import question4Image1 from '../../../assets/images/q4/enfant-oui.png';
import question4Image2 from '../../../assets/images/q4/enfant-non.png';

import question5Image1 from '../../../assets/images/q5/animal-oui.png';
import question5Image2 from '../../../assets/images/q5/animal-non.png';

import question6Image1 from '../../../assets/images/q6/petite.png';
import question6Image2 from '../../../assets/images/q6/moyenne.png';
import question6Image3 from '../../../assets/images/q6/grand.png';

import question7Image1 from '../../../assets/images/q7/cold.png';
import question7Image2 from '../../../assets/images/q7/normal.png';
import question7Image3 from '../../../assets/images/q7/hot.png';

export const formStepModel = [
    {
        questionCode: 'gardeningLevel',
        questionLabel: "VOTRE NIVEAU EN ENTRETIEN DE PLANTE :",
        responses: [{
            imgSrc: question1Image1,
            value: 1,
            label: "NOVICE"
        },
        {
            imgSrc: question1Image2,
            value: 2,
            label: "INTERMEDIAIRE"
        },
        {
            imgSrc: question1Image3,
            value: 3,
            label: "EXPERT"
        }
        ],
        selectedResponseValue: null

    },
    {
        questionCode: 'location',
        questionLabel: "OÙ SOUHAITEZ VOUS METTRE VOTRE PLANTE ?",
        responses: [{
            imgSrc: question2Image1,
            value: "INSIDE",
            label: "INTÉRIEUR"
        },
        {
            imgSrc: question2Image2,
            value: "GARDEN",
            label: "EXTÉRIEUR"
        },
        {
            imgSrc: question2Image3,
            value: "TERRACE",
            label: "BALCON"
        }
        ],
        selectedResponseValue: null
    },
    {
        questionCode: 'sunLevel',
        questionLabel: "QUEL EST LE NIVEAU D’ENSOLEILLEMENT DE LA PLACE DE VOTRE PLANTE ?",
        responses: [{
            imgSrc: question3Image1,
            value: "SUNNY",
            label: "+8H DE SOLEIL/JOUR"
        },
        {
            imgSrc: question3Image2,
            value: "PARTIAL_SHADE",
            label: "ENTRE 4 ET 8H DE SOLEIL /JOUR"
        },
        {
            imgSrc: question3Image3,
            value: "SHADY",
            label: "MAJORITE D'OMBRE"
        }
        ],
        selectedResponseValue: null
    },
    {
        questionCode: 'hasChildren',
        questionLabel: "AVEZ-VOUS DES ENFANTS ?",
        responses: [{
            imgSrc: question4Image1,
            value: true,
            label: "OUI"
        },
        {
            imgSrc: question4Image2,
            value: false,
            label: "NON"
        }
        ],
        selectedResponseValue: null
    },
    {
        questionCode: 'hasAnimals',
        questionLabel: "AVEZ-VOUS DES ANIMAUX ?",
        responses: [{
            imgSrc: question5Image1,
            value: true,
            label: "OUI"
        },
        {
            imgSrc: question5Image2,
            value: false,
            label: "NON"
        }
        ],
        selectedResponseValue: null
    },
    {
        questionCode: 'size',
        questionLabel: "QUELLE EST LA TAILLE DE LA PLANTE SOUHAITÉE ?",
        responses: [
            {
                imgSrc: question6Image1,
                value: 1,
                label: "ENTRE 20 ET 30 CM"
            },
            {
                imgSrc: question6Image2,
                value: 2,
                label: "ENTRE 30 ET 50 CM"
            },
            {
                imgSrc: question6Image3,
                value: 3,
                label: "PLUS DE 50 CM"
            },
        ],
        selectedResponseValue: null
    },
    {
        questionCode: 'temperature',
        questionLabel: "TEMPÉRATURE OÙ LA PLANTE SERA PLACÉE",
        responses: [
            {
                imgSrc: question7Image1,
                value: "COLD",
                label: "FAIBLE"
            },
            {
                imgSrc: question7Image2,
                value: "NORMAL",
                label: "MODÉRÉE"
            },
            {
                imgSrc: question7Image3,
                value: "HOT",
                label: "ÉLEVÉE"
            },
        ],
        selectedResponseValue: null
    }
];