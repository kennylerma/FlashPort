export class FMatrix 
{
	public f:Float32Array = new Float32Array(6);
	private t0:number;
	private t1:number;
	private t2:number;
	private t3:number;

	constructor(a:number = 1, b:number = 0, c:number = 0, d:number = 1, tx:number = 0, ty:number = 0)
	{
		this.f[0] = a;
		this.f[1] = b;
		this.f[2] = c;
		this.f[3] = d;
		this.f[4] = tx;
		this.f[5] = ty;
	}
	
	/*public function clone():Matrix
	{
		return new Matrix(f[0], f[1], f[2], f[3], f[4], f[5]);
	}
	
	public function concat(m:FMatrix):void
	{
		var f2:Float32Array = m.f;
		t0 = f[0];
		f[0] = f[0] * m.a + f[1] * m.c;
		f[1] = t0 * m.b + f[1] * m.d;
		
		t0 = f[2];
		f[2] = f[2] * m.a + f[3] * m.c;
		f[3] = t0 * m.b + f[3] * m.d;

		t0 = tx;
		f[4] = tx * m.a + ty * m.c + m.tx;
		f[5] = t0 * m.b + ty * m.d + m.ty;
	}
	
	public function invert():void
	{
		if (b === 0 && c === 0)
		{
			a = 1 / a;
			d = 1 / d;
			tx *= -a;
			ty *= -d;
		}
		else
		{
			var det:number = a * d - b * c;
			if (det === 0)
			{
				a = d = 1;
				b = c = 0;
				tx = ty = 0;
			}else{
				det = 1 / det;
				t0 = a;
				t1 = b;
				t2 = c;
				t3 = d;
				a = t3 * det;
				b = -t1 * det;
				c = -t2 * det;
				d = t0 * det;
				t0 = -(b * tx + d * ty);
				tx = -(a * tx + c * ty);
				ty = t0;
			}
		}
	}
	
	public function identity():void 
	{
		a = d = 1;
		b = c = 0;
		tx = ty = 0;
	}
	
	public function createBox(scaleX:number, scaleY:number, rotation:number = 0, tx:number = 0, ty:number = 0):void
	{
		var u:number = Math.cos(rotation);
		var v:number = Math.sin(rotation);
		a = u * scaleX;
		b = v * scaleY;
		c = -v * scaleX;
		d = u * scaleY;
		tx = tx;
		ty = ty;
	}
	
	public function createGradientBox(width:number, height:number, rotation:number = 0, tx:number = 0, ty:number = 0):void
	{
		this.createBox(width / 1638.4, height / 1638.4, rotation, tx + width / 2, ty + height / 2);
	}
	
	public function rotate(angle:number):void
	{
		var u:number = Math.cos(angle);
		var v:number = Math.sin(angle);
		t0 = a;
		t1 = c;
		t2 = tx;
		a = u * a - v * b;
		b = v * t0 + u * b;
		c = u * c - v * d;
		d = v * t1 + u * d;
		tx = u * tx - v * ty;
		ty = v * t2 + u * ty;
	}
	
	public function translate(dx:number, dy:number):void
	{
		tx += dx;
		ty += dy;
	}
	
	public function scale(sx:number, sy:number):void
	{
		a *= sx;
		b *= sy;
		c *= sx;
		d *= sy;
		tx *= sx;
		ty *= sy;
	}
	
	public function deltaTransformPoint(point:Point):Point
	{
		return new Point(a * point.x + c * point.y, d * point.y + b * point.x);
	}
	
	public function transformPoint(point:Point):Point
	{
		return new Point(a * point.x + c * point.y + tx, d * point.y + b * point.x + ty);
	}
	
	public function toString():string
	{
		return "(a=" + a + ", b=" + b + ", c=" + c + ", d=" + d + ", tx=" + tx + ", ty=" + ty + ")";
	}
	
	public function copyFrom(sourceMatrix:Matrix):void
	{
		a = sourceMatrix.a;
		b = sourceMatrix.b;
		c = sourceMatrix.c;
		d = sourceMatrix.d;
		tx = sourceMatrix.tx;
		ty = sourceMatrix.ty;
	}
	
	public function setTo(aa:number, ba:number, ca:number, da:number, txa:number, tya:number):void
	{
		a = aa;
		b = ba;
		c = ca;
		d = da;
		tx = txa;
		ty = tya;
	}
	
	public function copyRowTo(row:uint, vector3D:Vector3D):void
	{
		switch (row)
		{
		case 0: 
			break;
		case 1: 
			vector3D.x = b;
			vector3D.y = d;
			vector3D.z = ty;
			break;
		case 2: 
		case 3: 
			vector3D.x = 0;
			vector3D.y = 0;
			vector3D.z = 1;
			break;
		default: 
			vector3D.x = a;
			vector3D.y = c;
			vector3D.z = tx;
		}
	}
	
	public function copyColumnTo(column:uint, vector3D:Vector3D):void
	{
		switch (column)
		{
		case 0: 
			break;
		case 1: 
			vector3D.x = c;
			vector3D.y = d;
			vector3D.z = 0;
			break;
		case 2: 
		case 3: 
			vector3D.x = tx;
			vector3D.y = ty;
			vector3D.z = 1;
			break;
		default: 
			vector3D.x = a;
			vector3D.y = b;
			vector3D.z = 0;
		}
	}
	
	public function copyRowFrom(row:uint, vector3D:Vector3D):void
	{
		switch (row)
		{
		case 0: 
			break;
		case 1: 
		case 2: 
			b = vector3D.x;
			d = vector3D.y;
			ty = vector3D.z;
			break;
		default: 
			a = vector3D.x;
			c = vector3D.y;
			tx = vector3D.z;
		}
	}
	
	public function copyColumnFrom(column:uint, vector3D:Vector3D):void
	{
		switch (column)
		{
		case 0: 
			break;
		case 1: 
		case 2: 
			b = vector3D.x;
			d = vector3D.y;
			ty = vector3D.z;
			break;
		default: 
			a = vector3D.x;
			c = vector3D.y;
			tx = vector3D.z;
		}
	}*/
	
}