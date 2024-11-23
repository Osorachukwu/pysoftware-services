export async function getMenuItems(){
    try{
        const res = await fetch('/api/v1/menu_items');
        const data = await res.json()
        return data;
    }catch(error){
        throw new Error(error)
    }
}