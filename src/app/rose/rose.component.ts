import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-javier',
  templateUrl: './javier.component.html',
  styleUrls: ['./javier.component.css'],
})
export class JavierComponent implements OnInit {
  @Input() public webName: string = 'kennethjavier.com';
  @Output() public message = new EventEmitter();

  public products: any = [
    {
      imageSource:
        'https://img.pikbest.com/png-images/qiantu/hand-drawn-claypot-porridge-illustration-design-element_2654972.png!c1024wm0/compress/true/progressive/true/format/webp/fw/1024',
    },
    {
      productName: 'GOTO WITH EGG',
      productPrice: '₱50',
      productImage:
        'http://images.summitmedia-digital.com/reportrworld/images/2021/06/09/shutterstock-1479997271-2-1623222592.jpg',
    },
    {
      productName: 'GOTO WITH ATAY',
      productPrice: '₱75',
      productImage:
        'http://images.summitmedia-digital.com/yummyph/images/2016/09/09/batangas-goto.jpg',
    },
    {
      productName: 'GOTO WITH CHICKEN',
      productPrice: '₱80',
      productImage:
        'https://www.seriouseats.com/thmb/Gilwm5w7iHxu-nUQ4OmjGHjn1qY=/1500x1125/filters:fill(auto,1)/20210508-arroz-caldo-melissa-hom-Hero-seriouseats-6-dbc8058635c64ac0bd3eeadd8da5ddee.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  sendToParent() {
    let x: any = alert(
      'You have just place your order on NANAY MARITES GOTOHURN '
    );
    this.message.emit(x);
  }
}
