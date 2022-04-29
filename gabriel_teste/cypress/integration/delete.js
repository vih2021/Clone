/// <reference types="cypress" />

import { APPOLTS, APPXDSLTELNET} from '../fixtures/params'
import Function from '../integration/funcao_extra/function'


describe('DELETE',() => {
    window.fill = []

////////////////////////////////appxdsltelnet///////////////////////////////////////////

    it('xdsl_delete', () => {
        let ip =  APPXDSLTELNET.IP
        let slot =  APPXDSLTELNET.SLOT
        let port = APPXDSLTELNET.PORT
        cy.xdsl_delete(ip, slot, port).then( resp =>{
            fill.push(Function.ErrorsList('xdsl_delete', resp))
            expect(resp.status).to.be.equal(204)
        })
    })

    // it('xdsl', () => {
    //     let ip =  APPXDSLTELNET.IP
    //     let slot =  APPXDSLTELNET.SLOT
    //     let port = APPXDSLTELNET.PORT
    //     let user =  APPXDSLTELNET.USER
    //     let password =  APPXDSLTELNET.PASSWORD
    //     cy.xdsl(ip, slot, port, user, password).then( resp =>{
    //         fill.push(Function.ErrorsList('xdsl', resp))
    //         expect(resp.status).to.be.equal(204)
    //     })
    // })

/////////////////////////////////////////appolts////////////////////////////////////////////////
    it('onu_delete', () => {
        let fsan =  APPOLTS.FSAN
        cy.onu_delete(fsan).then( resp =>{
            fill.push(Function.ErrorsList('onu_delete', resp))
            expect(resp.status).to.be.equal(204)
        })
    })

    it('position_delete', () => {
        let ip = APPOLTS.IP
        let slot = APPOLTS.SLOT
        let olt = APPOLTS.OLT
        let onu_port = APPOLTS.ONU_PORT
        let fsan = APPOLTS.FSAN
        cy.position_delete(ip, slot, olt, onu_port, fsan).then( resp =>{
            fill.push(Function.ErrorsList('position_delete', resp))
            expect(resp.status).to.be.equal(204)
        })
    })

    it('onu_voip_delete', () => {
        let ip = APPOLTS.IP
        let slot = APPOLTS.SLOT
        let olt = APPOLTS.OLT
        let onu_port = APPOLTS.ONU_PORT
        let line_id = APPOLTS.LINE_ID
        let fsan = APPOLTS.FSAN
        cy.onu_voip_delete(ip, slot, olt, onu_port, line_id, fsan).then( resp =>{
            fill.push(Function.ErrorsList('onu_voip_delete', resp))
            expect(resp.status).to.be.equal(204)
        })
    })

    it('onu_delete_2', () => {
        let ip = APPOLTS.IP
        let slot = APPOLTS.SLOT
        let olt = APPOLTS.OLT
        let onu_port = APPOLTS.ONU_PORT
        let fsan = APPOLTS.FSAN
        cy.onu_delete_2(ip, slot, olt, onu_port, fsan).then( resp =>{
            fill.push(Function.ErrorsList('onu_delete_2', resp))
            expect(resp.status).to.be.equal(204)
        })
    })

    it('Show failed tests', () =>{
        console.table(window.fill)
    })
})


