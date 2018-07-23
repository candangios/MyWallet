export const STORAGE_KEY = '@Storage/Recents';
export async function loadRecentAddresses() {
    const recents = await StorageService.getItem(Recents.STORAGE_KEY);
    return recents ? JSON.parse(recents) : [];
}

export async function saveRecentAddresses(recents) {
    await StorageService.setItem(Wallet.STORAGE_KEY, JSON.stringify(map));
}