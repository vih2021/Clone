describe('POST',() => {

/////////////////////////////////////////appacs/////////////////////////////////////////////////

    // it('teste para router_create', () =>{
    //     cy.fixture('appacs_post/router_create').then(body => {
    //         cy.router_create(body).then( resp =>{
    //             expect(resp.status).to.be.equal(200)
    //         })
    //     })
    // })

/////////////////////////////////////////appadm/////////////////////////////////////////////////

    it('teste para migra_gpon_porta', () =>{
        cy.fixture('appadm_post/migra_gpon_porta').then(body => {
            cy.migra_gpon_porta(body).then( resp =>{
                expect(resp.status).to.be.equal(200)
            })
        })
    })

/////////////////////////////////////////appxdsltelnet////////////////////////////////////////////

    it('teste para adsl_create', () =>{
        cy.fixture('appxdsltelnet_post/adsl_create').then(body => {
            cy.adsl_create(body).then( resp =>{
                expect(resp.status).to.be.equal(200)
            })
        })
    })
    
    it('teste para vdsl_create', () =>{
        cy.fixture('appxdsltelnet_post/vdsl_create').then(body => {
            cy.vdsl_create(body).then( resp =>{
                expect(resp.status).to.be.equal(200)
            })
        })
    })

    it('teste para vdsl_video_create', () =>{
        cy.fixture('appxdsltelnet_post/vdsl_video_create').then(body => {
            cy.vdsl_video_create(body).then( resp =>{
                expect(resp.status).to.be.equal(200)
            })
        })
    })

    it('teste para xdsl_voice_create', () =>{
        cy.fixture('appxdsltelnet_post/xdsl_voice_create').then(body => {
            cy.xdsl_voice_create(body).then( resp =>{
                expect(resp.status).to.be.equal(200)
            })
        })
    })


/////////////////////////////////////////appolts////////////////////////////////////////////

    it('teste para onu_voip_create', () =>{
        cy.fixture('appolts_post/onu_voip_create').then(body => {
            cy.onu_voip_create(body).then( resp =>{
                expect(resp.status).to.be.equal(200)
            })
        })
    })

    it('teste para onu_business_create', () =>{
        cy.fixture('appolts_post/onu_business_create').then(body => {
            cy.onu_business_create(body).then( resp =>{
                expect(resp.status).to.be.equal(200)
            })
        })
    })

    it('teste para onu_home_create', () =>{
        cy.fixture('appolts_post/onu_home_create').then(body => {
            cy.onu_home_create(body).then( resp =>{
                expect(resp.status).to.be.equal(200)
            })
        })
    })

    it('teste para onu_router_create', () =>{
        cy.fixture('appolts_post/onu_router_create').then(body => {
            cy.onu_router_create(body).then( resp =>{
                expect(resp.status).to.be.equal(200)
            })
        })
    })

    it('teste para reprovisiona_dslam', () =>{
        cy.fixture('appolts_post/reprovisiona_dslam').then(body => {
            cy.reprovisiona_dslam(body).then( resp =>{
                expect(resp.status).to.be.equal(200)
            })
        })
    })

    it('teste para reprovisiona_pppoe', () =>{
        cy.fixture('appolts_post/reprovisiona_pppoe').then(body => {
            cy.reprovisiona_pppoe(body).then( resp =>{
                expect(resp.status).to.be.equal(200)
            })
        })
    })

    it('teste para migrar_dslam', () =>{
        cy.fixture('appolts_post/migrar_dslam').then(body => {
            cy.migrar_dslam(body).then( resp =>{
                expect(resp.status).to.be.equal(200)
            })
        })
    })
})