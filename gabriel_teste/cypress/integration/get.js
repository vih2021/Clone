/// <reference types="cypress" />

import { APPCPECHECKLIST, FIBERHOME, GPON, APPMASSIVE, APPOLTS, APPXDSLTELNET, APPZHONE, APPZTE, APPHUAWEI } from '../fixtures/params'
import Function from '../integration/funcao_extra/function'
//APPZHONE EXECUTAR SEPARADOS

describe('GET',() => { 
    window.fill = []

    ////////////////////////////////appcpechecklist///////////////////////////////////////////

    it('teste para appcpechecklist', () =>{
        let pppoe = APPCPECHECKLIST.PPPOE
        cy.appcpechecklist(pppoe).then( resp =>{
            fill.push(Function.ErrorsList('appcpechecklist', resp))
            expect(resp.status).to.be.equal(200)
        })
    })

    ////////////////////////////////appfiberhome///////////////////////////////////////////

    it('teste para appfiberhome/onu_list', () =>{
        let ip = FIBERHOME.IP
        let slot = FIBERHOME.SLOT
        let olt = FIBERHOME.OLT
        cy.fiberhome_onu_list(ip,slot,olt).then( resp =>{
            fill.push(Function.ErrorsList('appfiberhome/onu_list', resp))
            expect(resp.status).to.be.equal(200)
        })
    })

    it('teste para appfiberhome/onu_power', () =>{
        let ip = FIBERHOME.IP
        let slot = FIBERHOME.SLOT
        let olt = FIBERHOME.OLT
        let onu = FIBERHOME.ONU
        cy.fiberhome_onu_power(ip,slot,olt,onu).then( resp =>{
            fill.push(Function.ErrorsList('appfiberhome/onu_power', resp))
            expect(resp.status).to.be.equal(200)
        })
    })

    /////////////////////////////////////appgpon///////////////////////////////////////////

    it('teste para appgpon', () =>{
        let ip = GPON.IP
        let slot = GPON.SLOT
        let olt = GPON.OLT
        cy.appgpon(ip,slot,olt).then( resp =>{
            fill.push(Function.ErrorsList('appgpon', resp))
            expect(resp.status).to.be.equal(200)
        })
    })

    ///////////////////////////////////apphuawei//////////////////////////////////////////

    // it('teste para apphuawei_onu_list', () =>{
    //     let ip = APPHUAWEI.IP
    //     let slot = APPHUAWEI.SLOT
    //     let olt = APPHUAWEI.OLT
    //     cy.apphuawei_onu_list(ip,slot,olt).then( resp =>{
    //         expect(resp.status).to.be.equal(200)
    //     })
    // })

    // it('teste para apphuawei_onu_list_power', () =>{
    //     let ip = APPHUAWEI.IP
    //     let slot = APPHUAWEI.SLOT
    //     let olt = APPHUAWEI.OLT
    //     cy.apphuawei_onu_list_power(ip,slot,olt).then( resp =>{
    //         expect(resp.status).to.be.equal(200)
    //     })
    // })

    // it('teste para apphuawei_onu_list_status', () =>{
    //     let ip = APPHUAWEI.IP
    //     let slot = APPHUAWEI.SLOT
    //     let olt = APPHUAWEI.OLT
    //     cy.apphuawei_onu_list_status(ip,slot,olt).then( resp =>{
    //         expect(resp.status).to.be.equal(200)
    //     })
    // })

    ///////////////////////////////appmassive////////////////////////////////////////////

    it('teste para appmassive_host', () =>{
        let massive_id = APPMASSIVE.MASSIVE
        let host_id = APPMASSIVE.HOST
        cy.appmassive_host(massive_id, host_id).then( resp =>{
            fill.push(Function.ErrorsList('appmassive_host', resp))
            expect(resp.status).to.be.equal(200)
        })
    })

    //////////////////////////////////appolts/////////////////////////////////////////

    it('teste para appolts_check_device_ip', () =>{
        let ip = APPOLTS.IP
        cy.appolts_check_device_ip(ip).then( resp =>{
            fill.push(Function.ErrorsList('appolts_check_device_ip', resp))
            expect(resp.status).to.be.equal(200)
        })
    })

    it('teste para appolts_status_onu', () =>{
        let ip = APPOLTS.IP
        let slot = APPOLTS.SLOT
        let olt = APPOLTS.OLT
        let onu = APPOLTS.ONU
        let fsan = APPOLTS.FSAN
        cy.appolts_status_onu(ip,slot,olt,onu,fsan).then( resp =>{
            fill.push(Function.ErrorsList('appolts_status_onu', resp))
            expect(resp.status).to.be.equal(200)
        })
    })

    it('teste para appolts_list_status', () =>{
        let ip = APPOLTS.IP
        let slot = APPOLTS.SLOT
        let olt = APPOLTS.OLT
        cy.appolts_list_status(ip,slot,olt).then( resp =>{
            fill.push(Function.ErrorsList('appolts_list_status', resp))
            expect(resp.status).to.be.equal(200)
        })
    })

    it('teste para appolts_onu_power', () =>{
        let ip = APPOLTS.IP
        let slot = APPOLTS.SLOT
        let olt = APPOLTS.OLT
        let onu = APPOLTS.ONU
        let fsan = APPOLTS.FSAN
        cy.appolts_onu_power(ip,slot,olt,onu,fsan).then( resp =>{
            fill.push(Function.ErrorsList('appolts_onu_power', resp))
            expect(resp.status).to.be.equal(200)
        })
    })

    it('teste para appolts_onu_wifi_status', () =>{
        let ip = APPOLTS.IP
        let slot = APPOLTS.SLOT
        let olt = APPOLTS.OLT
        let onu = APPOLTS.ONU
        let fsan = APPOLTS.FSAN
        cy.appolts_onu_wifi_status(ip,slot,olt,onu,fsan).then( resp =>{
            fill.push(Function.ErrorsList('appolts_onu_wifi_status', resp))
            expect(resp.status).to.be.equal(200)
        })
    })

    it('teste para appolts_onu_port_status', () =>{
        let ip = APPOLTS.IP
        let slot = APPOLTS.SLOT
        let olt = APPOLTS.OLT
        let onu = APPOLTS.ONU
        let fsan = APPOLTS.FSAN
        cy.appolts_onu_port_status(ip,slot,olt,onu,fsan).then( resp =>{
            fill.push(Function.ErrorsList('appolts_onu_port_status', resp))
            expect(resp.status).to.be.equal(200)
        })
    })

    it('teste para appolts_gpon_onu_details', () =>{
        let ip = APPOLTS.IP
        let slot = APPOLTS.SLOT
        let olt = APPOLTS.OLT
        let onu = APPOLTS.ONU
        cy.appolts_gpon_onu_details(ip,slot,olt,onu).then( resp =>{
            fill.push(Function.ErrorsList('appolts_gpon_onu_details', resp))
            expect(resp.status).to.be.equal(200)
        })
    })

    it('teste para appolts_onu_check_conf_status', () =>{
        let ip = APPOLTS.IP
        let slot = APPOLTS.SLOT
        let olt = APPOLTS.OLT
        let onu = APPOLTS.ONU
        let fsan = APPOLTS.FSAN
        cy.appolts_onu_check_conf_status(ip,slot,olt,onu,fsan).then( resp =>{
            fill.push(Function.ErrorsList('appolts_onu_check_conf_status', resp))
            expect(resp.status).to.be.equal(200)
        })
    })

    it('teste para appolts_onu_check_status', () =>{
        let ip = APPOLTS.IP
        let slot = APPOLTS.SLOT
        let olt = APPOLTS.OLT
        let onu = APPOLTS.ONU
        let fsan = APPOLTS.FSAN
        cy.appolts_onu_check_status(ip,slot,olt,onu,fsan).then( resp =>{
            fill.push(Function.ErrorsList('appolts_onu_check_status', resp))
            expect(resp.status).to.be.equal(200)
        })
    })

    it('teste para appolts_onu_omci_status', () =>{
        let ip = APPOLTS.IP
        let slot = APPOLTS.SLOT
        let olt = APPOLTS.OLT
        let onu = APPOLTS.ONU
        let fsan = APPOLTS.FSAN
        cy.appolts_onu_omci_status(ip,slot,olt,onu,fsan).then( resp =>{
            fill.push(Function.ErrorsList('appolts_onu_omci_status', resp))
            expect(resp.status).to.be.equal(200)
        })
    })

    it('teste para appolts_onu_bridge_path_list', () =>{
        let ip = APPOLTS.IP
        let slot = APPOLTS.SLOT
        let olt = APPOLTS.OLT
        let onu = APPOLTS.ONU
        let fsan = APPOLTS.FSAN
        let vlan = APPOLTS.VLAN
        cy.appolts_onu_bridge_path_list(ip,slot,olt,onu,fsan,vlan).then( resp =>{
            fill.push(Function.ErrorsList('appolts_onu_bridge_path_list', resp))
            expect(resp.status).to.be.equal(200)
        })
    })

    it('teste para appolts_dslam_fsan_status', () =>{
        let ip = APPOLTS.IP
        let fsan = APPOLTS.FSAN
        cy.appolts_dslam_fsan_status(ip,fsan).then( resp =>{
            fill.push(Function.ErrorsList('appolts_dslam_fsan_status', resp))
            expect(resp.status).to.be.equal(200)
        })
    })

    it('teste para appolts_fsan_availability_status', () =>{
        let ip = APPOLTS.IP
        let fsan = APPOLTS.FSAN
        let slot = APPOLTS.SLOT
        let olt = APPOLTS.OLT
        let onu = APPOLTS.ONU
        cy.appolts_fsan_availability_status(ip,fsan,slot,olt,onu).then( resp =>{
            fill.push(Function.ErrorsList('appolts_fsan_availability_status', resp))
            expect(resp.status).to.be.equal(200)
        })
    })

    it('teste para appolts_cto_status', () =>{
        let ip = APPOLTS.IP
        let slot = APPOLTS.SLOT
        let olt = APPOLTS.OLT
        let cto = APPOLTS.CTO
        cy.appolts_cto_status(ip,slot,olt,cto).then( resp =>{
            fill.push(Function.ErrorsList('appolts_cto_status', resp))
            expect(resp.status).to.be.equal(200)
        })
    })

    it('teste para appolts_check_onu_position', () =>{
        let ip = APPOLTS.IP
        let slot = APPOLTS.SLOT
        let olt = APPOLTS.OLT
        let onu_port = APPOLTS.ONU_PORT
        let fsan = APPOLTS.FSAN
        cy.appolts_check_onu_position(ip,slot,olt,onu_port,fsan).then( resp =>{
            fill.push(Function.ErrorsList('appolts_check_onu_position', resp))
            expect(resp.status).to.be.equal(200)
        })
    })

    it('teste para appolts_get_onu_rate_limit', () =>{
        let ip = APPOLTS.IP
        let slot = APPOLTS.SLOT
        let olt = APPOLTS.OLT
        let onu_port = APPOLTS.ONU_PORT
        let fsan = APPOLTS.FSAN
        cy.appolts_get_onu_rate_limit(ip,slot,olt,onu_port,fsan).then( resp =>{
            fill.push(Function.ErrorsList('appolts_get_onu_rate_limit', resp))
            expect(resp.status).to.be.equal(200)
        })
    })

    it('teste para appolts_dslam_gpon_list', () =>{
        cy.appolts_dslam_gpon_list().then( resp =>{
            fill.push(Function.ErrorsList('appolts_dslam_gpon_list', resp))
            expect(resp.status).to.be.equal(200)
        })
    })

    it('teste para appolts_onu_available_list', () =>{
        let ip = APPOLTS.IP
        cy.appolts_onu_available_list(ip).then( resp =>{
            fill.push(Function.ErrorsList('appolts_onu_available_list', resp))
            expect(resp.status).to.be.equal(200)
        })
    })

    it('teste para appolts_dslam_card_status', () =>{
        let ip = APPOLTS.IP
        cy.appolts_dslam_card_status(ip).then( resp =>{
            fill.push(Function.ErrorsList('appolts_dslam_card_status', resp))
            expect(resp.status).to.be.equal(200)
        })
    })

    /////////////////////////////////appxdsltelnet//////////////////////////////////////////

    it('teste para appxdsltelnet_xdsl_telefone_backup', () =>{
        let ip = APPXDSLTELNET.IP
        let slot = APPXDSLTELNET.SLOT
        let port = APPXDSLTELNET.PORT
        cy.appxdsltelnet_xdsl_telefone_backup(ip,slot,port).then( resp =>{
            fill.push(Function.ErrorsList('appxdsltelnet_xdsl_telefone_backup', resp))
            expect(resp.status).to.be.equal(200)
        })
    })

    /////////////////////////////////////appzhone///////////////////////////////////////////

    // it.only('teste para appzhone_onu_status', () =>{
    //     let ip = APPZHONE.IP
    //     let slot = APPZHONE.SLOT
    //     let olt = APPZHONE.OLT
    //     let gpon_port = APPZHONE.GPON_PORT
    //     cy.appzhone_onu_status(ip,slot,olt,gpon_port).then( resp =>{
    //         // fill.push({
    //         //     status: resp.status,
    //         //     key:   "appzhone_onu_status",
    //         //     value: resp.body.error.message
    //         // })
    //         expect(resp.status).to.be.equal(200)
    //     })
    // })

    // it.only('teste para appzhone_onu_list_status', () =>{
    //     let ip = APPZHONE.IP
    //     let slot = APPZHONE.SLOT
    //     let olt = APPZHONE.OLT
    //     cy.appzhone_onu_list_status(ip,slot,olt).then( resp =>{
    //         // fill.push({
    //         //     status: resp.status,
    //         //     key:   "appzhone_onu_list_status",
    //         //     value: resp.body.error.message
    //         // })
    //         expect(resp.status).to.be.equal(200)
    //     })
    // })

    ////////////////////////////////////appzte///////////////////////////////////////

    it('teste para appzte_onu_list_status', () =>{
        let ip = APPZTE.IP
        let slot = APPZTE.SLOT
        let olt = APPZTE.OLT
        cy.appzte_onu_list_status(ip,slot,olt).then( resp =>{
            fill.push(Function.ErrorsList('appzte_onu_list_status', resp))
            expect(resp.status).to.be.equal(200)
        })
    })

    it('teste para appzte_onu_power', () =>{
        let ip = APPZTE.IP
        let slot = APPZTE.SLOT
        let olt = APPZTE.OLT
        let onu = APPZTE.ONU
        cy.appzte_onu_power(ip,slot,olt,onu).then( resp =>{
            fill.push(Function.ErrorsList('appzte_onu_power', resp))
            expect(resp.status).to.be.equal(200)
        })
    })

    it("show failed tests", () =>{
        console.table(window.fill)
    })
})
