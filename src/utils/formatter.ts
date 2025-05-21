import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function capitalizeFirstLetter(text: string) {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export function formatDate(date: string) {
    if (!date || isNaN(new Date(date).getTime())) return '';
    const formattedDate = formatDistanceToNow(new Date(date), {
        addSuffix: true,
        locale: ptBR
    })
    return formattedDate
}

export function getFirstSectionFromMarkdown(markdown: string) {
    const match = markdown.match(/^[\s\S]*?(?=^#|\Z)/m);
    if (!match) return '';
    const plainText = match[0].replace(/[#_*`>[\]()-]/g, '').replace(/\!\[.*\]\(.*\)/g, '');
    return plainText.trim();
}