export type GalleryItem = {
    id: number;
    title: string;
    group: string;
    front: string;
    location: string;
    /**
     * Describes what is actually visible in the `front` image. These are the only gallery
     * images present in the DOM before a click, so they are the ones search engines and
     * screen readers see. Keep each one specific and distinct — repeating the same
     * keyword-stuffed string across images is worth less than describing each photo.
     */
    alt: string;
};

const galleryItems: GalleryItem[] = [
    {
        id: 1,
        title: "Internal Gutter Cleaning",
        group: "group1",
        front: "/assets/album/five/IMG_1360.webp",
        location: "Tunbridge Wells",
        alt: "Before and after: leaf debris and moss cleared from a roof valley gutter between two tiled roofs in Tunbridge Wells",
    },
    {
        id: 2,
        title: "Fascia Soffits and Cladding Cleaning",
        group: "group2",
        front: "/assets/album/three/IMG_0076.webp",
        location: "Kent",
        alt: "Cleaned white fascias, soffits and cladding with grey downpipes on a three-storey rendered property in Kent",
    },
    {
        id: 5,
        title: "Gutter Installation",
        group: "group4",
        front: "/assets/album/zero/before_after_collage_11.webp",
        location: "Tunbridge Wells",
        alt: "Before and after: weathered timber fascia replaced with new brown guttering and fascia on a red brick property in Tunbridge Wells",
    },
    {
        id: 6,
        title: "Conservatory Roof Cleaning",
        group: "group6",
        front: "/assets/album/four/before_and_after.webp",
        location: "Kent",
        alt: "Before and after: moss and green algae washed from the polycarbonate panels of a conservatory roof in Kent",
    },
    {
        id: 7,
        title: "Windows Cleaning",
        group: "group7",
        front: "/assets/album/six/before-and-after.webp",
        location: "Kent",
        alt: "Before and after: algae and grime cleaned from uPVC window frames and sills on a red brick house in Kent",
    },
];

export default galleryItems
