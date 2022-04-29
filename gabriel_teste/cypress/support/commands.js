/// <reference types="cypress" />

Cypress.Commands.add('appcpechecklist', (pppoe) => {
    cy.request({
        method: 'GET',
        url: `http://websvc:pass@172.30.0.45:8090/cpe_checklist/json/${pppoe}`,
        failOnStatusCode: false
    })
})

/////////////////////////////////////fiberhome////////////////////////////////////////////////////

Cypress.Commands.add('fiberhome_onu_list', (ip, slot, olt) => {
    cy.request({
        method: 'GET',  // seria 'get'
        url: `http://websvc:pass@172.30.0.45:8090/fiberhome/onu_list_status/${ip}/${slot}}/${olt}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('fiberhome_onu_power', (ip, slot, olt, onu) => {
    cy.request({
        method: 'GET',
        url: `http://websvc:pass@172.30.0.45:8090/fiberhome/onu_power/${ip}/${slot}/${olt}/${onu}`,
        failOnStatusCode: false
    })
})

///////////////////////////////////////appgpon////////////////////////////////////////////////////

Cypress.Commands.add('appgpon', (ip, slot, olt) => {
    cy.request({
        method: 'GET',
        url: `http://websvc:pass@172.30.0.45:8090/oss/gpon/onu_list_status/${ip}/${slot}/${olt}`,
        failOnStatusCode: false
    })
})

//////////////////////////////////////apphuawei///////////////////////////////////////////////////

Cypress.Commands.add('apphuawei_onu_list', (ip, slot, olt) => {
    cy.request({
        method: 'GET',
        url: `http://websvc:pass@172.30.0.45:8090/huawei/onu_list/${ip}/${slot}/${olt}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('apphuawei_onu_list_power', (ip, slot, olt) => {
    cy.request({
        method: 'GET',
        url: `http://websvc:pass@172.30.0.45:8090/huawei/onu_list_power/${ip}/${slot}/${olt}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('apphuawei_onu_list_status', (ip, slot, olt) => {
    cy.request({
        method: 'GET',
        url: `http://websvc:pass@172.30.0.45:8090/huawei/onu_list_status/${ip}/${slot}/${olt}`,
        failOnStatusCode: false
    })
})

///////////////////////////////////////appmassive/////////////////////////////////////////////////

Cypress.Commands.add('appmassive_host', (massive_id, host_id) => {
    cy.request({
        method: 'GET',
        url: `http://websvc:pass@172.30.0.45:8090/massive/host_massive/${massive_id}/${host_id}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('appmassive_primaria', (primaria_id) => {
    cy.request({
        method: 'GET',
        url: `http://websvc:pass@172.30.0.45:8090/massive/primary_massive/<massive_id>/${primaria_id}`,
        failOnStatusCode: false
    })
})

////////////////////////////////////////appolts///////////////////////////////////////////////////

Cypress.Commands.add('onu_delete_2', (ip, slot, olt, onu_port, fsan) => {
    cy.request({
        method: 'DELETE',
        url: `http://websvc:pass@172.30.0.45:8090/olts/onu_delete_2/${ip}/${slot}/${olt}/${onu_port}/${fsan}`,
        failOnStatusCode: false,
    })
})

Cypress.Commands.add('onu_voip_delete', (ip, slot, olt, onu_port, line_id, fsan) => {
    cy.request({
        method: 'DELETE',
        url: `http://websvc:pass@172.30.0.45:8090/olts/onu_voip_delete/${ip}/${slot}/${olt}/${onu_port}/${line_id}/${fsan}`,
        failOnStatusCode: false,
    })
})

Cypress.Commands.add('position_delete', (ip, slot, olt, onu_port, fsan) => {
    cy.request({
        method: 'DELETE',
        url: `http://websvc:pass@172.30.0.45:8090/olts/position_delete/${ip}/${slot}/${olt}/${onu_port}/${fsan}`,
        failOnStatusCode: false,
    })
})

Cypress.Commands.add('onu_delete', (fsan) => {
    cy.request({
        method: 'DELETE',
        url: `http://websvc:pass@172.30.0.45:8090/olts/onu_delete/${fsan}`,
        failOnStatusCode: false,
    })
})

Cypress.Commands.add('migrar_dslam', (cp) => {
    cy.request({
        method: 'POST',
        url: `http://websvc:pass@172.30.0.45:8090/olts/migrar_dslam`,
        failOnStatusCode: false,
        body: cp
    })
})

Cypress.Commands.add('reprovisiona_pppoe', (cp) => {
    cy.request({
        method: 'POST',
        url: `http://websvc:pass@172.30.0.45:8090/olts/reprovisiona_pppoe`,
        failOnStatusCode: false,
        body: cp
    })
})

Cypress.Commands.add('reprovisiona_dslam', (cp) => {
    cy.request({
        method: 'POST',
        url: `http://websvc:pass@172.30.0.45:8090/olts/reprovisiona_dslam`,
        failOnStatusCode: false,
        body: cp
    })
})

Cypress.Commands.add('onu_router_create', (cp) => {
    cy.request({
        method: 'POST',
        url: `http://websvc:pass@172.30.0.45:8090/olts/onu_router_create`,
        failOnStatusCode: false,
        body: cp
    })
})

Cypress.Commands.add('onu_home_create', (cp) => {
    cy.request({
        method: 'POST',
        url: `http://websvc:pass@172.30.0.45:8090/olts/onu_home_create`,
        failOnStatusCode: false,
        body: cp
    })
})

Cypress.Commands.add('onu_business_create', (cp) => {
    cy.request({
        method: 'POST',
        url: `http://websvc:pass@172.30.0.45:8090/olts/onu_business_create`,
        failOnStatusCode: false,
        body: cp
    })
})

Cypress.Commands.add('onu_voip_create', (cp) => {
    cy.request({
        method: 'POST',
        url: `http://websvc:pass@172.30.0.45:8090/olts/onu_voip_create`,
        failOnStatusCode: false,
        body: cp
    })
})

Cypress.Commands.add('onu_voip_update', (cp) => {
    cy.request({
        method: 'PUT',
        url: `http://websvc:pass@172.30.0.45:8090/olts/onu_voip_update`,
        failOnStatusCode: false,
        body: cp
    })
})

Cypress.Commands.add('reprovisiona_clientes_nao_conectados', (cp) => {
    cy.request({
        method: 'PUT',
        url: `http://websvc:pass@172.30.0.45:8090/olts/reprovisiona_clientes_nao_conectados`,
        failOnStatusCode: false,
        body: cp
    })
})

Cypress.Commands.add('onu_wifi_update', (cp) => {
    cy.request({
        method: 'PUT',
        url: `http://websvc:pass@172.30.0.45:8090/olts/onu_wifi_update`,
        failOnStatusCode: false,
        body: cp
    })
})

Cypress.Commands.add('onu_set2default_update', (cp) => {
    cy.request({
        method: 'PUT',
        url: `http://websvc:pass@172.30.0.45:8090/olts/onu_set2default_update`,
        failOnStatusCode: false,
        body: cp
    })
})

Cypress.Commands.add('onu_reboot_update', (cp) => {
    cy.request({
        method: 'PUT',
        url: `http://websvc:pass@172.30.0.45:8090/olts/onu_reboot_update`,
        failOnStatusCode: false,
        body: cp
    })
})

Cypress.Commands.add('onu_resync_update', (cp) => {
    cy.request({
        method: 'PUT',
        url: `http://websvc:pass@172.30.0.45:8090/olts/onu_resync_update`,
        failOnStatusCode: false,
        body: cp
    })
})

Cypress.Commands.add('plano_update_2', (cp) => {
    cy.request({
        method: 'PUT',
        url: `http://websvc:pass@172.30.0.45:8090/olts/plano_update_2`,
        failOnStatusCode: false,
        body: cp
    })
})

Cypress.Commands.add('plano_update', (cp) => {
    cy.request({
        method: 'PUT',
        url: `http://websvc:pass@172.30.0.45:8090/olts/plano_update`,
        failOnStatusCode: false,
        body: cp
    })
})

Cypress.Commands.add('fsan_update_2', (cp) => {
    cy.request({
        method: 'PUT',
        url: `http://websvc:pass@172.30.0.45:8090/olts/fsan_update_2`,
        failOnStatusCode: false,
        body: cp
    })
})

Cypress.Commands.add('fsan_update', (cp) => {
    cy.request({
        method: 'PUT',
        url: `http://websvc:pass@172.30.0.45:8090/olts/fsan_update`,
        failOnStatusCode: false,
        body: cp
    })
})

Cypress.Commands.add('appolts_check_device_ip', (ip) => {
    cy.request({
        method: 'GET',
        url: `http://websvc:pass@172.30.0.45:8090/olts/check_device_ip/${ip}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('appolts_status_onu', (ip, slot, olt, onu, fsan) => {
    cy.request({
        method: 'GET',
        url: `http://websvc:pass@172.30.0.45:8090/olts/obtem_status_onu/${ip}/${slot}/${olt}/${onu}/${fsan}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('appolts_list_status', (ip, slot, olt) => {
    cy.request({
        method: 'GET',
        url: `http://websvc:pass@172.30.0.45:8090/olts/onu_list_status/${ip}/${slot}/${olt}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('appolts_onu_power', (ip, slot, olt, onu, fsan) => {
    cy.request({
        method: 'GET',
        url: `http://websvc:pass@172.30.0.45:8090/olts/onu_power/${ip}/${slot}/${olt}/${onu}/${fsan}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('appolts_onu_wifi_status', (ip, slot, olt, onu, fsan) => {
    cy.request({
        method: 'GET',
        url: `http://websvc:pass@172.30.0.45:8090/olts/onu_wifi_status/${ip}/${slot}/${olt}/${onu}/${fsan}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('appolts_onu_port_status', (ip, slot, olt, onu, fsan) => {
    cy.request({
        method: 'GET',
        url: `http://websvc:pass@172.30.0.45:8090/olts/onu_port_status/${ip}/${slot}/${olt}/${onu}/${fsan}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('appolts_gpon_onu_details', (ip, slot, olt, onu) => {
    cy.request({
        method: 'GET',
        url: `http://websvc:pass@172.30.0.45:8090/olts/gpon_onu_details/${ip}/${slot}/${olt}/${onu}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('appolts_onu_check_conf_status', (ip, slot, olt, onu, fsan) => {
    cy.request({
        method: 'GET',
        url: `http://websvc:pass@172.30.0.45:8090/olts/onu_check_conf_status/${ip}/${slot}/${olt}/${onu}/${fsan}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('appolts_onu_check_status', (ip, slot, olt, onu, fsan) => {
    cy.request({
        method: 'GET',
        url: `http://websvc:pass@172.30.0.45:8090/olts/onu_checa_status/${ip}/${slot}/${olt}/${onu}/${fsan}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('appolts_onu_omci_status', (ip, slot, olt, onu, fsan) => {
    cy.request({
        method: 'GET',
        url: `http://websvc:pass@172.30.0.45:8090/olts/onu_omci_status/${ip}/${slot}/${olt}/${onu}/${fsan}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('appolts_onu_bridge_path_list', (ip, slot, olt, onu, fsan, vlan) => {
    cy.request({
        method: 'GET',
        url: `http://websvc:pass@172.30.0.45:8090/olts/onu_bridge_path_list/${ip}/${slot}/${olt}/${onu}/${fsan}/${vlan}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('appolts_dslam_fsan_status', (ip, fsan) => {
    cy.request({
        method: 'GET',
        url: `http://websvc:pass@172.30.0.45:8090/olts/dslam_fsan_status/${ip}/${fsan}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('appolts_fsan_availability_status', (ip, fsan, slot, olt, onu) => {
    cy.request({
        method: 'GET',
        url: `http://websvc:pass@172.30.0.45:8090/olts/fsan_availability_status/${ip}/${fsan}/${slot}/${olt}/${onu}`,
        failOnStatusCode: false // ???????????????????????????????????????????????????
    })
})

Cypress.Commands.add('appolts_cto_status', (ip, slot, olt, cto) => {
    cy.request({
        method: 'GET',
        url: `http://websvc:pass@172.30.0.45:8090/olts/cto_status/${ip}/${slot}/${olt}/${cto}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('appolts_check_onu_position', (ip, slot, olt, onu_port, fsan) => {
    cy.request({
        method: 'GET',
        url: `http://websvc:pass@172.30.0.45:8090/olts/check_onu_position/${ip}/${slot}/${olt}/${onu_port}/${fsan}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('appolts_get_onu_rate_limit', (ip, slot, olt, onu_port, fsan) => {
    cy.request({
        method: 'GET',
        url: `http://websvc:pass@172.30.0.45:8090/olts/get_onu_rate_limit/${ip}/${slot}/${olt}/${onu_port}/${fsan}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('appolts_dslam_gpon_list', () => {
    cy.request({
        method: 'GET',
        url: `http://websvc:pass@172.30.0.45:8090/olts/dslam_gpon_list`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('appolts_onu_available_list', (ip) => {
    cy.request({
        method: 'GET',
        url: `http://websvc:pass@172.30.0.45:8090/olts/onu_avaiable_list/${ip}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('appolts_dslam_card_status', (ip) => {
    cy.request({
        method: 'GET',
        url: `http://websvc:pass@172.30.0.45:8090/olts/dslam_card_status/${ip}`,
        failOnStatusCode: false
    })
})

//////////////////////////////////////appxdsltelnet////////////////////////////////////////////////

Cypress.Commands.add('xdsl', (ip, slot, port, user, password) => {
    cy.request({
        method: 'DELETE',
        url: `http://websvc:pass@172.30.0.45:8090/xdsl/${ip}/${slot}/${port}/${user}/${password}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('xdsl_delete', (ip, slot, port) => {
    cy.request({
        method: 'DELETE',
        url: `http://websvc:pass@172.30.0.45:8090/xdsl/xdsl_delete/${ip}/${slot}/${port}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('xdsl_voice_create', (cp) => {
    cy.request({
        method: 'POST',
        url: `http://websvc:pass@172.30.0.45:8090/xdsl/xdsl_voice_create`,
        failOnStatusCode: false,
        body: cp
    })
})

Cypress.Commands.add('vdsl_video_create', (cp) => {
    cy.request({
        method: 'POST',
        url: `http://websvc:pass@172.30.0.45:8090/xdsl/vdsl_video_create`,
        failOnStatusCode: false,
        body: cp
    })
})

Cypress.Commands.add('vdsl_create', (cp) => {
    cy.request({
        method: 'POST',
        url: `http://websvc:pass@172.30.0.45:8090/xdsl/vdsl_create`,
        failOnStatusCode: false,
        body: cp
    })
})

Cypress.Commands.add('adsl_create', (cp) => {
    cy.request({
        method: 'POST',
        url: `http://websvc:pass@172.30.0.45:8090/xdsl/adsl_create`,
        failOnStatusCode: false,
        body: cp
    })
})

Cypress.Commands.add('xdsl_migra_telefone', (cp) => {
    cy.request({
        method: 'PUT',
        url: `http://websvc:pass@172.30.0.45:8090/xdsl/xdsl_migra_telefone`,
        failOnStatusCode: false,
        body: cp
    })
})

Cypress.Commands.add('xdsl_modifica_telefone', (cp) => {
    cy.request({
        method: 'PUT',
        url: `http://websvc:pass@172.30.0.45:8090/xdsl/xdsl_modifica_telefone`,
        failOnStatusCode: false,
        body: cp
    })
})

Cypress.Commands.add('update_voice_status', (cp) => {
    cy.request({
        method: 'PUT',
        url: `http://websvc:pass@172.30.0.45:8090/xdsl/update_voice_status`,
        failOnStatusCode: false,
        body: cp
    })
})

Cypress.Commands.add('xdsl_profile_update', (cp) => {
    cy.request({
        method: 'PUT',
        url: `http://websvc:pass@172.30.0.45:8090/xdsl/xdsl_profile_update`,
        failOnStatusCode: false,
        body: cp
    })
})

Cypress.Commands.add('appxdsltelnet_xdsl_telefone_backup', (ip, slot, port) => {
    cy.request({
        method: 'GET',
        url: `http://websvc:pass@172.30.0.45:8090/xdsl/xdsl_telefone_backup/${ip}/${slot}/${port}`,
        failOnStatusCode: false
    })
})

////////////////////////////////////////appzhone///////////////////////////////////////////////////

Cypress.Commands.add('send_modificacao_to_queues', (cp) => {
    cy.request({
        method: 'PUT',
        url: `http://websvc:pass@172.30.0.45:8090/zhone/send_modificacao_to_queues`,
        failOnStatusCode: false,
        body: cp
    })
})

Cypress.Commands.add('modificacao_upload_checa_pppoe', (cp) => {
    cy.request({
        method: 'PUT',
        url: `http://websvc:pass@172.30.0.45:8090/zhone/modificacao_upload_checa_pppoe`,
        failOnStatusCode: false,
        body: cp
    })
})

Cypress.Commands.add('update_plano_and_check_conection', (cp) => {
    cy.request({
        method: 'PUT',
        url: `http://websvc:pass@172.30.0.45:8090/zhone/update_plano_and_check_conection`,
        failOnStatusCode: false,
        body: cp
    })
})

Cypress.Commands.add('update_plano_and_rules', (cp) => {
    cy.request({
        method: 'PUT',
        url: `http://websvc:pass@172.30.0.45:8090/zhone/update_plano_and_rules`,
        failOnStatusCode: false,
        body: cp
    })
})

Cypress.Commands.add('bridge_gpon_traffic_profile_update', (cp) => {
    cy.request({
        method: 'PUT',
        url: `http://websvc:pass@172.30.0.45:8090/zhone/bridge_gpon_traffic_profile_update`,
        failOnStatusCode: false,
        body: cp
    })
})

Cypress.Commands.add('onu_wifi_update', (cp) => {
    cy.request({
        method: 'PUT',
        url: `http://websvc:pass@172.30.0.45:8090/zhone/onu_wifi_update`,
        failOnStatusCode: false,
        body: cp
    })
})

Cypress.Commands.add('appzhone_onu_status', (ip, slot, olt, gpon_port) => {
    cy.request({
        method: 'GET',
        url: `http://websvc:pass@172.30.0.45:8090/zhone/onu_status/${ip}/${slot}/${olt}/${gpon_port}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('appzhone_onu_list_status', (ip, slot, olt) => {
    cy.request({
        method: 'GET',
        url: `http://websvc:pass@172.30.0.45:8090/zhone/onu_list_status/${ip}/${slot}/${olt}`,
        failOnStatusCode: false
    })
})

//////////////////////////////////////////appzte///////////////////////////////////////////////////

Cypress.Commands.add('appzte_onu_list_status', (ip, slot, olt) => {
    cy.request({
        method: 'GET',
        url: `http://websvc:pass@172.30.0.45:8090/zte/onu_list_status/${ip}/${slot}/${olt}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('appzte_onu_power', (ip, slot, olt, onu) => {
    cy.request({
        method: 'GET',
        url: `http://websvc:pass@172.30.0.45:8090/zte/onu_power/${ip}/${slot}/${olt}/${onu}`,
        failOnStatusCode: false
    })
})

//////////////////////////////////////////appdb///////////////////////////////////////////////////

Cypress.Commands.add('execute_onu_power_record', (cp) => {
    cy.request({
        method: 'PUT',
        url: `http://websvc:pass@172.30.0.45:8090/db/execute_onu_power_record`,
        failOnStatusCode: false,
        body: cp
    })
})

//////////////////////////////////////////appacs///////////////////////////////////////////////////

// Cypress.Commands.add('router_create', (cp) =>{
//     cy.request({
//         method: 'POST',
//         url : `http://websvc:pass@172.30.0.45:8090/acs/router_create`,
//         failOnStatusCode: false,
//         body: cp
//     })
// })

//////////////////////////////////////////appadm///////////////////////////////////////////////////

Cypress.Commands.add('migra_gpon_porta', (cp) => {
    cy.request({
        method: 'POST',
        url: `http://websvc:pass@172.30.0.45:8090/adm/migra_gpon_porta`,
        failOnStatusCode: false,
        body: cp
    })
})