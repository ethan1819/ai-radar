import Link from "next/link";
export default function NotFound() {
  return (<div className="container-page page-section text-center">
    <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
    <p className="text-xl text-text-muted mb-8">页面不存在</p>
    <Link href="/" className="btn-primary">返回首页</Link>
  </div>);
}