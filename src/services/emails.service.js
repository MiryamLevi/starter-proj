const temp_emails = [{
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    isStarred: false,
    sentAt : 1551133930594,
    removedAt : null, //for later use
    from: 'momo@momo.com',
    to: 'user@appsus.com'
    },
    {
        id: 'e102',
        subject: 'Winter Sale!',
        body: 'All the shirts in 50%',
        isRead: false,
        isStarred: false,
        sentAt : 1551133930594,
        removedAt : null, //for later use
        from: 'sales@momo.com',
        to: 'user@appsus.com'
        }
]
    
const loggedinUser = {
    email: 'user@appsus.com',
    fullName: 'Mahatma Appsus'
   }

const filterBy = {
    status: 'inbox/sent/star/trash',
    txt: 'puki', // no need to support complex text search
    isRead: true/false/null, // (optional property, if missing: show all)
   }


import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

export const emilService = {
    query,
    save,
    remove,
    getById,
    createEmail,
    getDefaultFilter
}

const STORAGE_KEY = 'emails'

_createEmails()

async function query() {
    return new Promise(resolve => setTimeout(() => resolve(temp_emails), 100));
}


// async function query(filterBy) {
//     let emails = await storageService.query(STORAGE_KEY)
//     if (filterBy) {
//         let { minBatteryStatus, model = '' } = filterBy
//         minBatteryStatus = minBatteryStatus || 0
//         const regexModelTerm = new RegExp(model, 'i')
//         emails = emails.filter(email =>
//             regexModelTerm.test(email.model) &&
//             email.batteryStatus > minBatteryStatus
//         )
//     }
//     return emails
// }



function getById(id) {
    return storageService.get(STORAGE_KEY, id)
}

function remove(id) {
    return storageService.remove(STORAGE_KEY, id)
}

function save(emailToSave) {
    if (emailToSave.id) {
        return storageService.put(STORAGE_KEY, emailToSave)
    } else {
        emailToSave.isOn = false
        return storageService.post(STORAGE_KEY, emailToSave)
    }
}

function createEmail(model = '', type = '', batteryStatus = 100) {
    return {
        model,
        batteryStatus,
        type
    }
}

function getDefaultFilter() {
    return {
        type: '',
        minBatteryStatus: 0,
        maxBattery: '',
        model: ''
    }
}

function _createEmails() {
    let emails = utilService.loadFromStorage(STORAGE_KEY)
    if (!emails || !emails.length) {
        emails = [{
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    isStarred: false,
    sentAt : 1551133930594,
    removedAt : null, //for later use
    from: 'momo@momo.com',
    to: 'user@appsus.com'
      }  ]
        utilService.saveToStorage(STORAGE_KEY, emails)
    }
}




