import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetGiphysService } from '../services/get-giphys.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  giphys: any = [];
  qq: any;

  constructor(private route: ActivatedRoute, private getGiphyService: GetGiphysService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.qq = params['qq']
      console.log(this.qq)
      console.log(this.qq)

      this.getGiphyService.getGiphys(this.qq).subscribe(giphys => {
        console.log(giphys)
        this.giphys = giphys
        console.log(this.giphys)
        console.log(this.giphys.data)
      })
    })
  }

}
