export const formStepModel = [
    {
        questionCode: 'gardeningLevel',
        questionLabel: "VOTRE NIVEAU EN ENTRETIEN DE PLANTE :",
        responses: [{
            imgSrc: "",
            value: 1,
            label: "NOVICE"
        },
        {
            imgSrc: "",
            value: 2,
            label: "INTERMEDIAIRE"
        },
        {
            imgSrc: "",
            value: 3,
            label: "EXPERT"
        }
        ],
        selectedResponseValue: null

    },
    {
        questionCode: 'location',
        questionLabel: "OU SOUHAITEZ VOUS METTRE VOTRE PLANTE ?",
        responses: [{
            imgSrc: "",
            value: "INSIDE",
            label: "INTÉRIEURE"
        },
        {
            imgSrc: "",
            value: "TERRACE",
            label: "EXTÉRIEURE/BALCON"
        },
        {
            imgSrc: "",
            value: "GARDEN",
            label: "JARDIN"
        }
        ],
        selectedResponseValue: null
    },
    {
        questionCode: 'sunLevel',
        questionLabel: "QUEL EST LE NIVEAU D’ENSOLEILLEMENT DE LA PLACE DE VOTRE PLANTE ?",
        responses: [{
            imgSrc: "",
            value: "SUNNY",
            label: "+8H DE SOLEIL/JOUR"
        },
        {
            imgSrc: "",
            value: "PARTIAL_SHADE",
            label: "ENTRE 4 ET 8H DE SOLEIL /JOUR"
        },
        {
            imgSrc: "",
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
            imgSrc: "",
            value: true,
            label: "OUI"
        },
        {
            imgSrc: "",
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
            imgSrc: "",
            value: true,
            label: "OUI"
        },
        {
            imgSrc: "",
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
                imgSrc: "",
                value: 1,
                label: "ENTRE 20 ET 30 CM"
            },
            {
                imgSrc: "",
                value: 2,
                label: "ENTRE 30 ET 50 CM"
            },
            {
                imgSrc: "",
                value: 3,
                label: "PLUS DE 50 CM"
            },
        ],
        selectedResponseValue: null
    },
    {
        questionCode: 'temperature',
        questionLabel: "TEMPÉRATURE OU LA PLANTE SERA PLACÉE",
        responses: [
            {
                imgSrc: "",
                value: "COLD",
                label: "FAIBLE"
            },
            {
                imgSrc: "",
                value: "NORMAL",
                label: "MODÉRÉE"
            },
            {
                imgSrc: "",
                value: "HOT",
                label: "ÉLEVÉE"
            },
        ],
        selectedResponseValue: null
    }
];