import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductsResponse { products: Product[]; total: number; }

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private http = inject(HttpClient);
  getAll(limit = 100): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(`https://dummyjson.com/products?limit=${limit}`);
  }
}
