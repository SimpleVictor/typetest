import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {Http} from "@angular/http";

declare var $:any;

@Component({
    selector: 'selector',
    templateUrl: './client/modules/Home/home.component.html'
})
export class HomeComponent implements OnInit, AfterViewInit {

    public myBind:any = 'Technology is big, and there’s a wide range of people who go to hackathons. An iOS developer is not going to have the same range of expertise as an Android developer or a web applications developer or an arduino hacker or a UX designer';

    public counter:any = 0;
    public letterCounter: any = 0;

    myOutput:any[];

    constructor(private el:ElementRef) {
    }

    ngOnInit() {

    }

    ngAfterViewInit(){
        this.myOutput = this.myBind.split(' ');

        let myHTML = '';
        for(let i = 0; i < this.myOutput.length; i++){
            myHTML += '<span>';
            myHTML += this.myOutput[i];
            myHTML += '</span> ';

        };
        $(this.el.nativeElement).find('#myContent').append(myHTML);

        // $(this.el.nativeElement).find('#myContent')[0].


    }


    parseString(data, event) {
        for (let i = this.counter; i < this.myOutput.length; i++) {
            if (event.code === 'Space') {
                if (data.split(" ")[0] === this.myOutput[i]) {
                    console.log("you are correct!");

                    //Call this
                    this.splitForm(i);

                    $(this.el.nativeElement).find('#inputBox').val('');
                    this.counter = i + 1;
                    break;
                } else {
                    console.log("INCORRECT!");
                    break;
                };
            }
        };




    }
    splitForm(myI){

    }

    colorLetter(){
        console.log()
        $(this.el.nativeElement).find('#myContent')[0].innerHTML.replace("w", "<span style='color: red'>w</span>");
        this.letterCounter++;
    }

    testMe(){
    }

}

