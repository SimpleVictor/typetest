import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {Http} from "@angular/http";

declare var $:any;

@Component({
    selector: 'selector',
    styleUrls: ['./client/modules/Home/home.component.css'],
    templateUrl: './client/modules/Home/home.component.html'
})
export class HomeComponent implements OnInit, AfterViewInit {

    public myBind:any = "Technology is big, and there's a wide range of people who go big, and there's a wide range of people who go to hackathons. An iOS developer is not going to have the same range of expertise as an Android developer or a web applications developer or an arduino hacker or a UX designer";

    public WPM = 0;
    public wrongText: boolean = false;
    public startButton:boolean = false;
    public counter:any = 0;
    public gameTimer;
    public letterCounter: any = 0;
    public stupidCounter:number = 0;
    public stopInterval;

    public globalTimer:number = 0;

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
        console.log($(this.el.nativeElement).find('#myContent'));

        let firstWord = $(this.el.nativeElement).find('#myContent')[0].childNodes[0];

        $(firstWord).css({'color':'green', 'text-decoration':'underline'});


    }


    parseString(data, event) {

        for (let i = this.counter; i < this.myOutput.length-1; i++) {
            if (event.code === 'Space') {
                if (data.split(" ")[0] === this.myOutput[i]) {
                    this.wrongText = false;
                    console.log("you are correct!");

                    if(this.stupidCounter === 0){
                        let secondWord = $(this.el.nativeElement).find('#myContent')[0].childNodes[i];
                        $(secondWord).css('color', '');

                        let thirdWord = $(this.el.nativeElement).find('#myContent')[0].childNodes[i + 2];
                        $(thirdWord).css('color', 'green');
                    }else{
                        console.log("dfdf");
                        let secondWord = $(this.el.nativeElement).find('#myContent')[0].childNodes[i * 2];
                        $(secondWord).css('color', '');

                        let thirdWord = $(this.el.nativeElement).find('#myContent')[0].childNodes[i * 2 + 2];
                        console.log($(this.el.nativeElement).find('#myContent')[0].childNodes[i * 2 + 2].innerHTML);
                        $(thirdWord).css('color', 'green');
                    }
                    this.stupidCounter++;

                    this.counter++;

                    $(this.el.nativeElement).find('#inputBox').val('');

                    break;
                } else {
                    this.wrongText = true;
                    console.log("INCORRECT!");
                    break;
                };
            }
        };

        this.WPM = Math.floor((this.counter / this.globalTimer) * 60);

        if (data === this.myOutput[this.myOutput.length-1]) {
            this.startButton = false;
            clearInterval(this.stopInterval);
            this.globalTimer = 0;
            alert("You wining "+ this.WPM);
        }

    }

    splitForm(myI){

    }

    colorLetter(){
        console.log()
        $(this.el.nativeElement).find('#myContent')[0].innerHTML.replace("w", "<span style='color: red'>w</span>");
        this.letterCounter++;
    }

    startTest(){
        this.startButton = true;







        this.stopInterval = setInterval(() => {
            this.globalTimer++
            console.log(this.globalTimer);
        }, 1000);

    }

}

