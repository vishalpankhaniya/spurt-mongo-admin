/*
 * SpurtCommerce
 * version 2.1
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ConfigService} from '../../service/config.service';


@Injectable()
export class LayoutService {

    params: any = {};
    private URL = this.configService.get('api').baseUrl;


    constructor(private http: HttpClient,
                protected configService: ConfigService) {

    }

    /* get product list count api*/
    public getProductListCount(filterParam: any): Observable<any> {
        const reqOpts: any = {};
        const params = Object.getOwnPropertyNames(filterParam)
            .reduce((p, key) => p.set(key, filterParam[key]), new HttpParams());
        reqOpts.params = params;
        return this.http.get(this.URL + '/product/productlist', reqOpts);
    }

    /* get order list count api*/
    public getCatagoryListCount(filterParam: any): Observable<any> {
        const reqOpts: any = {};
        const params = Object.getOwnPropertyNames(filterParam)
            .reduce((p, key) => p.set(key, filterParam[key]), new HttpParams());
        reqOpts.params = params;
        return this.http.get(this.URL + '/categorylist', reqOpts);
    }

    /* get order list count api*/
    public getFeaturedProductListCount(filterParam: any): Observable<any> {
        const reqOpts: any = {};
        const params = Object.getOwnPropertyNames(filterParam)
            .reduce((p, key) => p.set(key, filterParam[key]), new HttpParams());
        reqOpts.params = params;
        return this.http.get(this.URL + '/product-store/featureproduct-list', reqOpts);
    }

}

