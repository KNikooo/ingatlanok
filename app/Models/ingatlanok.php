<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ingatlanok extends Model
{
    public function kategoriak(){
        return $this->hasOne(kategoriak::class, 'id', 'kategoria');
    }
}
