const configuredBase=String(import.meta.env.VITE_API_BASE_URL??'').trim().replace(/\/$/,'');
export const apiUrl=(path:string)=>`${configuredBase}${path}`;
export const apiFetch=(path:string,init?:RequestInit)=>fetch(apiUrl(path),init);
