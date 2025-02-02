export const slugify = (text) => {
    return text
        .toLowerCase()
        .trim()
        .replace(/ğ/g, "g")
        .replace(/ü/g, "u")
        .replace(/ş/g, "s")
        .replace(/ı/g, "i")
        .replace(/ö/g, "o")
        .replace(/ç/g, "c")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
};

export const slugToNormal = (slug) => {
    return slug
        .replace(/-/g, " ") // "-"
        .replace(/\b\w/g, (char) => char.toUpperCase());
};