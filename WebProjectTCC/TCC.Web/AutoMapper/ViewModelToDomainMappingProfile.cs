
namespace HTS.MVC.AutoMapper
{
    using global::AutoMapper;

    using TCC.Domain.Entities;
    using TCC.Web.Models;

    public class ViewModelToDomainMappingProfile : Profile
    {
        public override string ProfileName => "ViewModelToDomainMapping";

        public ViewModelToDomainMappingProfile()
        {

            this.CreateMap<Cliente, ClienteViewModel>();

            this.CreateMap<Colaborador, ColaboradorViewModel>();
            this.CreateMap<Empresa, EmpresaViewModel>();
        }
    }
}