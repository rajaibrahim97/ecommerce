# Forever 🛍️

A complete, dual-gateway full-stack MERN e-commerce platform featuring an interactive customer storefront and a unified administrative inventory dashboard.

---

## One-line description
A highly responsive full-stack e-commerce marketplace featuring robust multi-attribute product sorting, dynamic shopping cart variations, dual payment infrastructure (Stripe & Razorpay), and full admin inventory lifecycle management.

---

## Problem
Building a modern e-commerce platform requires solving more than just displaying a product list; it requires coordinating accurate cart states, managing variable attributes (like size or color selections), and configuring high-availability payment paths. Relying on an isolated provider can lead to regional transaction failures. Developers need a blueprint showing how to safely implement split customer/admin interfaces, structure relational data layers inside a document database, handle multipart media file uploads, and integrate dual international and regional payment processors concurrently.

---

## Features
* **Dual Payment Infrastructure:** Native, production-ready integration with both **Stripe** (for international cards) and **Razorpay** (for localized UPI/regional payments) alongside standard Cash on Delivery (COD) workflows.
* **Granular Product Discovery:** High-performance catalog browsing engine supporting real-time text-based search, multi-category structural filtering, and sorting layers (Price: Low to High / High to Low).
* **Matrix Variant Selection:** Dynamic cart orchestration logic ensuring distinct quantities can be managed across separate sizing elements (`S`, `M`, `L`, `XL`) for single inventory units.
* **Administrative Operations Console:** Separate, secure Admin panel to track and view user invoices, upload new inventory with file attachments, delete items, and change individual fulfillment tracking states (e.g., Ordered, Packing, Shipped, Delivered).
* **Robust Customer Checkout Rails:** Fluid multiphase checkout workflows handling complex address payloads, dynamic order summary totals, and secure mutation pipelines.
* **RESTful Backend Architecture:** Clean decoupling of routes, middleware access tokens, and structural controller logic utilizing Node.js and Express.

---

## Tech Stack
* **Frontend Storefront:** React.js, Tailwind CSS, React Router DOM, Axios.
* **Admin Interface:** React.js, Tailwind CSS, Axios.
* **Backend Runtime & API:** Node.js, Express.js.
* **Database & Client Layer:** MongoDB (Atlas Cloud Cluster), Mongoose ODM.
* **Payment Gateways:** Stripe SDK, Razorpay Node SDK.
* **Asset Storage:** Cloudinary API (or local disk storage middleware configuration via Multer).

---

## Architecture
Forever splits its presentation context into two distinct browser platforms connecting back to a singular, secure Express API server instance.

```text
+------------------------+      +------------------------+
|  1. Storefront Client  |      |   2. Admin Dashboard   |
|   (React / Customer)   |      |    (React / Owner)     |
+------------------------+      +------------------------+
            \                                /
             \  [HTTP REST Actions / JSON]  /
              v                            v
+--------------------------------------------------------+
|               3. Unified Monolithic Backend            |
|         (Node.js / Express.js / Route Middleware)      |
+--------------------------------------------------------+
               /            |            \
              /             |             \
             v              v              v
      +------------+  +------------+  +-------------+
      |  MongoDB   |  | Stripe API |  | Razorpay API|
      +------------+  +------------+  +-------------+
```

---
## Environement Configuration

### Backend

PORT=4000
MONGODB_URI="mongodb+srv://<user>:<password>@cluster.mongodb.net/forever"

#### Cloudinary Storage Configuration
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"

#### International Gateway Credentials
STRIPE_SECRET_KEY="sk_test_..."

#### Regional Gateway Credentials
RAZORPAY_KEY_ID="rzp_test_..."
RAZORPAY_KEY_SECRET="your_razorpay_secret"

#### Admin Authentication Guard
ADMIN_EMAIL="admin@forever.com"
ADMIN_PASSWORD="your_secure_admin_password"

### Frontend
VITE_BACKEND_URL="http://localhost:4000"

### Admin
VITE_BACKEND_URL="http://localhost:4000"

---

## Dependncy Installations 
### Install root/backend dependencies
npm install

### Install user storefront dependencies
cd frontend && npm install && cd ..

### Install administrative dashboard dependencies
cd admin && npm install && cd ..

---

## Running Project Locally
### Terminal 1 (Backend Core)
cd backend && npm run server

### Terminal 2 (Storefront Canvas)
cd frontend && npm run dev

### Terminal 3 (Admin Management Interface)
cd admin && npm run dev
