import { LoaderService } from './../../services/loader/loader.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

public showLoader$?:Observable<boolean>;

constructor(
  private loaderService: LoaderService
){ }

public ngOnInit(): void {
    this.showLoader$ = this.loaderService.shouldShowLoader$;
}

}
