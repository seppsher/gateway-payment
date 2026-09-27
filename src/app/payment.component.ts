import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss',
})
export class PaymentComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  protected orderId: string | null = null;

  ngOnInit(): void {
    this.orderId = this.route.snapshot.paramMap.get('orderId');
  }

  close(): void {
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
