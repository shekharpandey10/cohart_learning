
import { atom, selector } from 'recoil'
export const netWorkAtom = atom({
    key: "networkAtom",
    default: 95
})
export const jobsAtom = atom({
    key: "jobsAtom",
    default: 10
})
export const notificationAtom = atom({
    key: "notificationAtom",
    default: 12
})
export const messagingAtom = atom({
    key: "messagingAtom",
    default: 100
})


export const totalSelector = selector({
    key: "totalSelector",
    value: ({ get }) => {
        const netWorkAtomCount = get(netWorkAtom)
        const messagingAtomCount = get(messagingAtom)
        const jobsAtomCount = get(jobsAtom)
        const notificationAtomCount = get(netWorkAtom)
        return netWorkAtomCount + messagingAtomCount + jobsAtomCount + notificationAtomCount
    }
})