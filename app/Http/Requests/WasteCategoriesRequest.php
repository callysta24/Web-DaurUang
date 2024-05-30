<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class WasteCategoriesRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // return false;
        // diganti true
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        //    code here
        if (request()->isMethod('post')) {
            return [
                'category_name' => 'require|string|max:258',
                'poin_per_kg' => 'require|integer'
            ];
        } else {
            return [
                'category_name' => 'require|string|max:258',
                'poin_per_kg' => 'require|integer'
            ];
        }
    }

    public function messages()
    {
        if (request()->isMethod('post')) {
            return [
                'category_name.required' => 'category_name is reqiured',
                'poin_per_kg.required' => 'poin_per_kg is required'
            ];
        } else {
            return [
                'category_name.required' => 'category_name is reqiured',
                'poin_per_kg.required' => 'poin_per_kg is required'
            ];
        }
    }
}
