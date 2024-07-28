import React from 'react'
import InnerHtml from 'dangerously-set-html-content'

export class Badges extends React.Component {
    render() {
        const badges = {
            edt: `<div  class="col" data-iframe-width="150" data-iframe-height="270" data-share-badge-id="5a30a12d-5919-4d91-b8a1-882d8f13cbb1" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"/>`,
            docker: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="49ec31fd-bab1-476e-bc3d-2af0f8f76212" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
            plg: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="a3a4a1de-ee38-4d98-ad45-567293f53917" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
            agile: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="38070fb4-70eb-4f82-b05e-f1e58679138b" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
            apm: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="dfaf346e-5e2b-42aa-b1be-1d013a6ce761" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
            partners: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="1aa2624e-acf7-44a0-aae7-4ae574daba58" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
            garage: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="6a21dba1-988f-48af-85bc-b8932c2576ef" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
            hacker: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="18e89d57-f949-422e-bc4f-029433f72ef5" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
            spbd: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="b8c78f82-a52f-47a6-bb5d-5ffc7404a1c0" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`
        }

        return (
            <div className="card rounded body-color mt-4">
                <div className="card-header header-color">certifications and badges</div>
                <div className="card-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <InnerHtml html={badges.plg}></InnerHtml>
                            </div>
                            <div className="col-sm">
                                <InnerHtml html={badges.apm}></InnerHtml>
                            </div>
                            <div className="col-sm">
                                <InnerHtml html={badges.agile}></InnerHtml>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <InnerHtml html={badges.edt}></InnerHtml>
                            </div>
                            <div className="col-sm">
                                <InnerHtml html={badges.spbd}></InnerHtml>
                            </div>
                            <div className="col-sm">
                                <InnerHtml html={badges.hacker}></InnerHtml>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <InnerHtml html={badges.docker}></InnerHtml>
                            </div>
                            <div className="col-sm">
                                <InnerHtml html={badges.garage}></InnerHtml>
                            </div>
                            <div className="col-sm">
                                <InnerHtml html={badges.partners}></InnerHtml>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}