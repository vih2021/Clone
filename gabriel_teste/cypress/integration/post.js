/// <reference types="cypress" />

import Function from '../integration/funcao_extra/function'

describe('POST',() => {
    window.fill = []

/////////////////////////////////////////appacs/////////////////////////////////////////////////

    // it.only('teste para router_create', () =>{
    //     cy.fixture('appacs/post/router_create').then(body => {
    //         cy.router_create(body).then( resp =>{
    //             expect(resp.status).to.be.equal(201)
    //         })
    //     })
    // })

/////////////////////////////////////////appadm/////////////////////////////////////////////////
//     it('teste para migra_gpon_porta', () =>{
//         cy.fixture('appadm/post/migra_gpon_porta').then(body => {
//             cy.migra_gpon_porta(body).then( resp =>{
//                 fill.push(Function.ErrorsList('migra_gpon_porta', resp))
//                 expect(resp.status).to.be.equal(201)
//             })
//        })
//    })

/////////////////////////////////////////appxdsltelnet////////////////////////////////////////////
    it('teste para adsl_create', () =>{
        cy.fixture('appxdsltelnet/post/adsl_create').then(body => {
            cy.adsl_create(body).then( resp =>{
                fill.push(Function.ErrorsList('adsl_create', resp))
                expect(resp.status).to.be.equal(201)
            })
        })
    })
    
    it('teste para vdsl_create', () =>{
        cy.fixture('appxdsltelnet/post/vdsl_create').then(body => {
            cy.vdsl_create(body).then( resp =>{
                fill.push(Function.ErrorsList('vdsl_create', resp))
                expect(resp.status).to.be.equal(201)
            })
        })
    })

    it('teste para vdsl_video_create', () =>{
        cy.fixture('appxdsltelnet/post/vdsl_video_create').then(body => {
            cy.vdsl_video_create(body).then( resp =>{
                fill.push(Function.ErrorsList('vdsl_video_create', resp))
                expect(resp.status).to.be.equal(201)
            })
        })
    })

    it('teste para xdsl_voice_create', () =>{
        cy.fixture('appxdsltelnet/post/xdsl_voice_create').then(body => {
            cy.xdsl_voice_create(body).then( resp =>{
                fill.push(Function.ErrorsList('xdsl_voice_create', resp))
                expect(resp.status).to.be.equal(201)
            })
        })
    })

/////////////////////////////////////////appolts////////////////////////////////////////////

    it('teste para onu_voip_create', () =>{
        cy.fixture('appolts/post/onu_voip_create').then(body => {
            cy.onu_voip_create(body).then( resp =>{
                fill.push(Function.ErrorsList('onu_voip_create', resp))
                expect(resp.status).to.be.equal(201)
            })
        })
    })

    it('teste para onu_business_create', () =>{
        cy.fixture('appolts/post/onu_business_create').then(body => {
            cy.onu_business_create(body).then( resp =>{
                fill.push(Function.ErrorsList('onu_business_create', resp))
                expect(resp.status).to.be.equal(201)
            })
        })
    })

    it('teste para onu_home_create', () =>{
        cy.fixture('appolts/post/onu_home_create').then(body => {
            cy.onu_home_create(body).then( resp =>{
                fill.push(Function.ErrorsList('onu_home_create', resp))
                expect(resp.status).to.be.equal(201)
            })
        })
    })

    it('teste para onu_router_create', () =>{
        cy.fixture('appolts/post/onu_router_create').then(body => {
            cy.onu_router_create(body).then( resp =>{
                fill.push(Function.ErrorsList('onu_router_create', resp))
                expect(resp.status).to.be.equal(201)
            })
        })
    })

    it('teste para reprovisiona_dslam', () =>{
        cy.fixture('appolts/post/reprovisiona_dslam').then(body => {
            cy.reprovisiona_dslam(body).then( resp =>{
                fill.push(Function.ErrorsList('reprovisiona_dslam', resp))
                expect(resp.status).to.be.equal(200)
            })
        })
    })

    it('teste para reprovisiona_pppoe', () =>{
        cy.fixture('appolts/post/reprovisiona_pppoe').then(body => {
            cy.reprovisiona_pppoe(body).then( resp =>{
                fill.push(Function.ErrorsList('reprovisiona_pppoe', resp))
                expect(resp.status).to.be.equal(200)
            })
        })
    })

    it('teste para migrar_dslam', () =>{
        cy.fixture('appolts/post/migrar_dslam').then(body => {
            cy.migrar_dslam(body).then( resp =>{
                fill.push(Function.ErrorsList('migrar_dslam', resp))
                expect(resp.status).to.be.equal(200)
            })
        })
    })

    it("show failed tests", () =>{
        console.table(window.fill)
    })
})