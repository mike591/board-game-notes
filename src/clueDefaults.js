const clueDefaults = {
  header: {
    key: "header",
    rows: [
      [
        {
          value: "Player:",
          isEditable: false,
        },
        {
          value: "1",
          isEditable: true,
        },
        {
          value: "2",
          isEditable: true,
        },
        {
          value: "3",
          isEditable: true,
        },
        {
          value: "4",
          isEditable: true,
        },
        {
          value: "5",
          isEditable: true,
        },
        {
          value: "6",
          isEditable: true,
        },
      ],
    ],
  },
  suspects: {
    key: "suspects",
    label: "Suspects",
    rows: [
      [
        {
          value: "Scarlet",
          isEditable: false,
        },
        ...new Array(6).fill({ value: "", isEditable: true }),
      ],
      [
        {
          value: "Mustard",
          isEditable: false,
        },
        ...new Array(6).fill({ value: "", isEditable: true }),
      ],
      [
        {
          value: "White",
          isEditable: false,
        },
        ...new Array(6).fill({ value: "", isEditable: true }),
      ],
      [
        {
          value: "Green",
          isEditable: false,
        },
        ...new Array(6).fill({ value: "", isEditable: true }),
      ],
      [
        {
          value: "Peacock (blue)",
          isEditable: false,
        },
        ...new Array(6).fill({ value: "", isEditable: true }),
      ],
      [
        {
          value: "Plum (purple)",
          isEditable: false,
        },
        ...new Array(6).fill({ value: "", isEditable: true }),
      ],
    ],
  },
  weapons: {
    key: "weapons",
    label: "Weapons",
    rows: [
      [
        {
          value: "Candlestick",
          isEditable: false,
        },
        ...new Array(6).fill({ value: "", isEditable: true }),
      ],
      [
        {
          value: "Knife",
          isEditable: false,
        },
        ...new Array(6).fill({ value: "", isEditable: true }),
      ],
      [
        {
          value: "Rope",
          isEditable: false,
        },
        ...new Array(6).fill({ value: "", isEditable: true }),
      ],
      [
        {
          value: "Revolver",
          isEditable: false,
        },
        ...new Array(6).fill({ value: "", isEditable: true }),
      ],
      [
        {
          value: "Lead Pipe",
          isEditable: false,
        },
        ...new Array(6).fill({ value: "", isEditable: true }),
      ],
      [
        {
          value: "Wrench",
          isEditable: false,
        },
        ...new Array(6).fill({ value: "", isEditable: true }),
      ],
    ],
  },
  rooms: {
    key: "rooms",
    label: "Rooms",
    rows: [
      [
        {
          value: "Ballroom",
          isEditable: false,
        },
        ...new Array(6).fill({ value: "", isEditable: true }),
      ],
      [
        {
          value: "Billiard Room",
          isEditable: false,
        },
        ...new Array(6).fill({ value: "", isEditable: true }),
      ],
      [
        {
          value: "Conservatory",
          isEditable: false,
        },
        ...new Array(6).fill({ value: "", isEditable: true }),
      ],
      [
        {
          value: "Dining room",
          isEditable: false,
        },
        ...new Array(6).fill({ value: "", isEditable: true }),
      ],
      [
        {
          value: "Hall",
          isEditable: false,
        },
        ...new Array(6).fill({ value: "", isEditable: true }),
      ],
      [
        {
          value: "Kitchen",
          isEditable: false,
        },
        ...new Array(6).fill({ value: "", isEditable: true }),
      ],
      [
        {
          value: "Library",
          isEditable: false,
        },
        ...new Array(6).fill({ value: "", isEditable: true }),
      ],
      [
        {
          value: "Lounge",
          isEditable: false,
        },
        ...new Array(6).fill({ value: "", isEditable: true }),
      ],
      [
        {
          value: "Study",
          isEditable: false,
        },
        ...new Array(6).fill({ value: "", isEditable: true }),
      ],
    ],
  },
};

export default clueDefaults;
