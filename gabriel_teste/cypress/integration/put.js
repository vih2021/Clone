/// <reference types="cypress" />

import Function from '../integration/funcao_extra/function'

describe('PUT',() => { 
    window.fill = [] 

//////////////////////////////////////////appzhone////////////////////////////////////////////////   
    it('teste para onu_wifi_update', () =>{
        cy.fixture('appzhone/put/onu_wifi_update.json').then(body => {
            cy.onu_wifi_update(body).then( resp =>{
                fill.push(Function.ErrorsList('onu_wifi_update', resp))
                expect(resp.status).to.be.equal(200)
            })
        })
    })

    it('teste para bridge_gpon_traffic_profile_update', () =>{
        cy.fixture('appzhone/put/bridge_gpon_traffic_profile_update.json').then(body => {
            cy.bridge_gpon_traffic_profile_update(body).then( resp =>{
                fill.push(Function.ErrorsList('bridge_gpon_traffic_profile_update', resp))
                expect(resp.status).to.be.equal(200)
            })
        })
    })

    it('teste para update_plano_and_rules', () =>{
        cy.fixture('appzhone/put/update_plano_and_rules').then(body => {
            cy.update_plano_and_rules(body).then( resp =>{
                fill.push(Function.ErrorsList('update_plano_and_rules', resp))
                expect(resp.status).to.be.equal(200)
            })
        })
    })

    it('teste para update_plano_and_check_conection', () =>{
        cy.fixture('appzhone/put/update_plano_and_check_conection').then(body => {
            cy.update_plano_and_check_conection(body).then( resp =>{
                fill.push(Function.ErrorsList('update_plano_and_check_conection', resp))
                expect(resp.status).to.be.equal(200)
            })
        })
    })

    it('teste para modificacao_upload_checa_pppoe', () =>{
        cy.fixture('appzhone/put/modificacao_upload_checa_pppoe').then(body => {
            cy.modificacao_upload_checa_pppoe(body).then( resp =>{
                fill.push(Function.ErrorsList('modificacao_upload_checa_pppoe', resp))
                expect(resp.status).to.be.equal(200)
            })
        })
    })

    // it('teste para send_modificacao_to_queues', () =>{
    //     cy.fixture('appzhone/put/send_modificacao_to_queues').then(body => {
    //         cy.send_modificacao_to_queues(body).then( resp =>{
    //             fill.push(Function.ErrorsList('send_modificacao_to_queues', resp))
    //             expect(resp.status).to.be.equal(200)
    //         })
    //     })
    // })

////////////////////////////////////appxdsltelnet/////////////////////////////////////////////////

    it('teste para xdsl_profile_update', () =>{
        cy.fixture('appxdsltelnet/put/xdsl_profile_update').then(body => {
            cy.xdsl_profile_update(body).then( resp =>{
                fill.push(Function.ErrorsList('xdsl_profile_update', resp))
                expect(resp.status).to.be.equal(200)
            })
        })
    })

    it('teste para update_voice_status', () =>{
        cy.fixture('appxdsltelnet/put/update_voice_status').then(body => {
            cy.update_voice_status(body).then( resp =>{
                fill.push(Function.ErrorsList('update_voice_status', resp))
                expect(resp.status).to.be.equal(200)
            })
        })
    })

    it('teste para xdsl_modifica_telefone', () =>{
        cy.fixture('appxdsltelnet/put/xdsl_modifica_telefone').then(body => {
            cy.xdsl_modifica_telefone(body).then( resp =>{
                fill.push(Function.ErrorsList('xdsl_modifica_telefone', resp))
                expect(resp.status).to.be.equal(200)
            })
        })
    })

    it('teste para xdsl_migra_telefone', () =>{
        cy.fixture('appxdsltelnet/put/xdsl_migra_telefone').then(body => {
            cy.xdsl_migra_telefone(body).then( resp =>{
                fill.push(Function.ErrorsList('xdsl_migra_telefone', resp))
                expect(resp.status).to.be.equal(200)
            })
        })
    })

/////////////////////////////////////////appdb/////////////////////////////////////////////////

    it('teste para execute_onu_power_record', () =>{
        cy.fixture('appdb/put/execute_onu_power_record').then(body => {
            cy.execute_onu_power_record(body).then( resp =>{
                fill.push(Function.ErrorsList('execute_onu_power_record', resp))
                expect(resp.status).to.be.equal(200)
            })
        })
    })

///////////////////////////////////////apppolts//////////////////////////////////////////////////

    it('teste para fsan_update', () =>{
        cy.fixture('appolts/put/fsan_update').then(body => {
            cy.fsan_update(body).then( resp =>{
                fill.push(Function.ErrorsList('fsan_update', resp))
                expect(resp.status).to.be.equal(200)
            })
        })
    })

    it('teste para fsan_update_2', () =>{
        cy.fixture('appolts/put/fsan_update_2').then(body => {
            cy.fsan_update_2(body).then( resp =>{
                fill.push(Function.ErrorsList('fsan_update_2', resp))
                expect(resp.status).to.be.equal(200)
            })
        })
    })

    it('teste para plano_update', () =>{
        cy.fixture('appolts/put/plano_update').then(body => {
            cy.plano_update(body).then( resp =>{
                fill.push(Function.ErrorsList('plano_update', resp))
                expect(resp.status).to.be.equal(200)
            })
        })
    })

    it('teste para plano_update_2', () =>{
        cy.fixture('appolts/put/plano_update_2').then(body => {
            cy.plano_update_2(body).then( resp =>{
                fill.push(Function.ErrorsList('plano_update_2', resp))
                expect(resp.status).to.be.equal(200)
            })
        })
    })

    it('teste para onu_resync_update', () =>{
        cy.fixture('appolts/put/onu_resync_update').then(body => {
            cy.onu_resync_update(body).then( resp =>{
                fill.push(Function.ErrorsList('onu_resync_update', resp))
                expect(resp.status).to.be.equal(200)
            })
        })
    })

    it('teste para onu_reboot_update', () =>{
        cy.fixture('appolts/put/onu_reboot_update').then(body => {
            cy.onu_reboot_update(body).then( resp =>{
                fill.push(Function.ErrorsList('onu_reboot_update', resp))
                expect(resp.status).to.be.equal(200)
            })
        })
    })

    // it('teste para onu_set2default_update', () =>{
    //     cy.fixture('appolts/put/onu_set2default_update').then(body => {
    //         cy.onu_set2default_update(body).then( resp =>{
    //             fill.push(Function.ErrorsList('onu_set2default_update', resp))
    //             expect(resp.status).to.be.equal(200)
    //         })
    //     })
    // })

    it('teste para onu_wifi_update', () =>{
        cy.fixture('appolts/put/onu_wifi_update').then(body => {
            cy.onu_wifi_update(body).then( resp =>{
                fill.push(Function.ErrorsList('onu_wifi_update', resp))
                expect(resp.status).to.be.equal(200)
            })
        })
    })

    it('teste para reprovisiona_clientes_nao_conectados', () =>{
        cy.fixture('appolts/put/reprovisiona_clientes_nao_conectados').then(body => {
            cy.reprovisiona_clientes_nao_conectados(body).then( resp =>{
                fill.push(Function.ErrorsList('reprovisiona_clientes_nao_conectados', resp))
                expect(resp.status).to.be.equal(200)
            })
        })
    })

    it('teste para onu_voip_update', () =>{
        cy.fixture('appolts/put/onu_voip_update').then(body => {
            cy.onu_voip_update(body).then( resp =>{
                fill.push(Function.ErrorsList('onu_voip_update', resp))
                expect(resp.status).to.be.equal(200)
            })
        })
    })

    it("show failed tests", () =>{
        console.table(window.fill)
    })
})