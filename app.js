import { 
  loginToTicketOnSale,
  getSalesList,
  saveEventList
 } from './helpers'
 import {
  parseSalesPage
 } from './parser'
 import { signalingRef } from './config'

 const start = () => {
  return loginToTicketOnSale()
  .then(getSalesList)
  .then(parseSalesPage)
  .then(saveEventList)
  .catch(console.log)
 }

setInterval(() => start(), 86400000)