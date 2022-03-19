import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import {
    IPayPalConfig,
    ICreateOrderRequest
} from 'ngx-paypal';

@Component({
    selector: 'app-pay-pal',
    templateUrl: './pay-payl.component.html',
    styleUrls: ['./pay-payl.component.scss']

})
export class PayPalComponent implements OnInit {
    public payPalConfig?: IPayPalConfig;
    @Input() amount: number = 0
    @Input() prog: any = null!
    @Input() progtype: any = null!

    @Output() payment_typeselected = new EventEmitter<boolean>();
    @Output() payment_done = new EventEmitter<boolean>();


    payment_typeselected_status: boolean = false

    constructor(private db: AngularFirestore) {

    }


    ngOnInit(): void {
        this.initConfig();

    }
    // ar_EG
    // en_IL


    // AaGmm5gXWBUjsIdgLkLuNdUWkI9OVafBMR038v7Og_MEY1tLIOV85o6A-X7zh5z1-aOk2iD2sc38K0H5
    private initConfig(): void {
        this.payPalConfig = {
            currency: 'USD',
            clientId: 'AQgkbBby--NwE0Wl3t6esQoMXI7N4vI2haRbaBQwyfdcCfiyyGxCHDxnyLVkJWCo-ELowQmXUSmvh-Q-&locale=ar_EG&disable-funding=sofort,ideal',
            createOrderOnClient: (data) => <ICreateOrderRequest>{
                intent: 'CAPTURE',
                purchase_units: [{
                    amount: {
                        currency_code: 'USD',
                        value: `${this.amount}`,
                        breakdown: {
                            item_total: {
                                currency_code: 'USD',
                                value: `${this.amount}`
                            }
                        }
                    },

                }],
                application_context: {
                    shipping_preference: 'NO_SHIPPING',

                },


            },

            advanced: {
                commit: 'true'
            },
            style: {
                size: 'small',
                color: 'gold',
                shape: 'pill',

            },

            onApprove: (data, actions) => {
                console.log(data, actions);
                actions.order.get().then(() => {
                    console.log('onApprove - you can get full order details inside onApprove: ');
                });

            },
            onClientAuthorization: (data) => {

                console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);

                this.prog.collected_amount = Number(this.prog.collected_amount) + Number(this.amount)
                this.prog.remaining_amount = Number(this.prog.req_amount) - Number(this.prog.collected_amount)
                if (this.prog.collected_amount >= this.prog.req_amount) {
                    this.prog.status = false
                    this.prog.main_screen = false
                    this.db.collection('main_humanity').doc(this.prog.prog_main).delete()
                }
                this.payment_done.emit(true)

                const s = {
                    name: data.payer.name?.given_name + ' ' + data.payer.name?.surname,
                    prog: this.prog.name,
                    amount: this.amount,
                    date: Date.now(),

                }
                this.db.collection('suppliers').add((JSON.parse(JSON.stringify(s)))).then(() => {
                    if (this.progtype == 'progs') {
                        this.db.collection('progs').doc(this.prog.id).update((JSON.parse(JSON.stringify(this.prog)))).then(() => {
                            if (this.prog.prog_main != null || this.prog.prog_main != undefined) {
                                let p = { ...this.prog }
                                delete p.id
                                if (this.prog.collected_amount >= this.prog.req_amount) {
                                    this.db.collection('main_progs').doc(this.prog.prog_main).delete()
                                } else {
                                    this.db.collection('main_progs').doc(this.prog.prog_main).update((JSON.parse(JSON.stringify(this.prog))))

                                }
                            }
                        })
                    }

                    if (this.progtype == 'humanity') {
                        this.db.collection('humanity').doc(this.prog.id).update((JSON.parse(JSON.stringify(this.prog)))).then(() => {
                            if (this.prog.prog_main != null || this.prog.prog_main != undefined) {
                                let p = { ...this.prog }
                                delete p.id
                                if (this.prog.collected_amount >= this.prog.req_amount) {
                                    this.db.collection('main_humanity').doc(this.prog.prog_main).delete()
                                } else {
                                    this.db.collection('main_humanity').doc(this.prog.prog_main).update((JSON.parse(JSON.stringify(this.prog))))

                                }
                            }
                        })
                    }

                })




            },
            onCancel: (data, actions) => {
                if (this.payment_typeselected_status == true) {
                    this.payment_typeselected.emit(false)

                }
                console.log('OnCancel', data, actions);

            },
            onError: err => {
                console.log('OnError', err);
            },
            onClick: (data, actions) => {
                console.log('onClick', data, actions);
                if (data.fundingSource == "card") {
                    this.payment_typeselected.emit(true)
                    this.payment_typeselected_status = true
                }
            }
        };
    }
}








